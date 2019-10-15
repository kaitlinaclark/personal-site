import React from 'react';
import './App.css';
import Geocode from 'react-geocode';
import GoogleMapReact from 'google-map-react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyC1soN6m6TUODWQ71R4EBWzQCWPrdUlIkE");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();

const AnyReactComponent = ({ text }) => (
  <div className="any-react" style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      places: [{
          lat: 41.3850639, 
          lng:2.1734035,
          text:'Barcelona, Spain',
          key: 0
      }],
      input_value: '',
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //set default values for Google map
  static defaultProps = {
    center: {
      lat:  41.38,
      lng: 2.17
    },
    zoom: 2
  };
  // when user is typing in potential place, update values
  handleChange(event){
    this.setState({
      places: this.state.places, 
      input_value: event.target.value, 
      total: this.state.total
    });
  }

  // when user selects submit button, add marker to map
  handleSubmit(event){
    event.preventDefault()
      // Get latidude & longitude from address.
    Geocode.fromAddress(this.state.input_value)
    .then(
      response => {
        const la = response.results[0].geometry.location.lat;
        const ln = response.results[0].geometry.location.lng;
        const tx = response.results[0].formatted_address;
        const k = this.state.total+1;
        
        const place = { lat: la, lng: ln, text: tx , key: k};
        let pl = this.state.places;
        pl.push(place);
        this.setState({
          places: pl, 
          input_value: '', 
          total: k
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  render(){
  return (
      <div className="App">
        <NavBar />
        <Home />

        <div className="jumbotron">
          <AboutMe />
          <hr></hr>
          <Portfolio />

          <hr></hr>

          <div className="container-fluid justify-content-center">
            <h2>Google Maps API</h2>
            <h4>Please enter a city you would like to see on the map</h4>
            <div className="row justify-content-center">
              <div className="col-8">
                  <input type="text" 
                  value={this.state.input_value} 
                  onChange={this.handleChange}
                  className="form-control" placeholder="Search (e.g. Paris)"/>
              </div>
              <div className="col-4">
                  <button type="submit" onClick={this.handleSubmit} className="btn btn-block btn-warning">Search</button>
              </div>
              
            </div>
            <div style={{width: '100%', height: '400px'}} id={"main"}>
              <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC1soN6m6TUODWQ71R4EBWzQCWPrdUlIkE'}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                {
                  this.state.places.map( (plac, i) =>  <AnyReactComponent key={i} lat={plac.lat}  lng={plac.lng} text={plac.text} />)
                }
        
              </GoogleMapReact>
            </div>
          </div>

          
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default App;
