import React, {Component} from 'react';
import './Portfolio.css';
// import image1 from './files/clark_headshot.jpg';
import projects from './files/list-of-pojects';

function Portfolio() {
  return (
    <div className="container" id="portfolio">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <p style={{textAlign:'center', fontFamily:"Georgia", fontStyle:'italic'}}>
                <h2 style={{fontStyle:"normal"}}>Projects</h2>
                 </p>
                <p></p>
                
            </div>
        </div>
    </div>
  );
}

export default Portfolio;