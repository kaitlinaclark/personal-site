import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Geocode from "react-geocode";
 
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
  static defaultProps = {
    center: {
      lat:  41.38,
      lng: 2.17
    },
    zoom: 2
  };
  
  handleChange(event){
    this.setState({
      places: this.state.places, 
      input_value: event.target.value, 
      total: this.state.total
    });
  }
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
      <div className="app" data-spy="scroll" data-target="#navbar">
        <NavBar />
        <Home />
        <div className="jumbotron">
          
          <AboutMe />
          <Portfolio />
          <hr></hr>
          <div className="container-fluid justify-content-center">
            <h2>Google Maps API</h2>
            <h4>Please enter a city you would like to see on the map</h4>
            <div class="row justify-content-center">
              <div class="col-8">
                  <input type="text" 
                  value={this.state.input_value} 
                  onChange={this.handleChange}
                  class="form-control" placeholder="Search (e.g. Paris)"/>
              </div>
              <div class="col-4">
                  <button type="submit" onClick={this.handleSubmit} class="btn btn-block btn-warning">Search</button>
              </div>
              
            </div>
          </div>
          
          <Footer />
        </div>
        
      </div>
    );
  }
  
}

export default App;
