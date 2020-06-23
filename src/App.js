import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';



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

  render(){
  return (
      <div className="App">
        <NavBar />
        <Home />

        <div className="jumbotron">
          <AboutMe />
          <hr></hr>
          <Portfolio />
          
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default App;
