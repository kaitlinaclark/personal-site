import React from 'react';
import './AboutMe.css';
import image1 from '../files/clark_headshot.jpg';

function AboutMe() {
  return (
    <div className="container" id="aboutus">
        <div className="row">
            <div className="col-md-6 col-sm-12" width="device-width">
                <img src={image1} alt="Me" className="rounded-circle" height="auto" width="100%" />
            </div>
            <div className="col-md-6 col-sm-12"style={{textAlign:'center', fontFamily:"Georgia", fontStyle:'italic'}} >
                
                  <h2 style={{fontStyle:'normal'}}>About Me</h2>
                <h4>What's shakin y'all?</h4>
                <div style={{fontStyle:'normal'}}>Hi! My name is Kaity. I just graduated with my BS in Computer Science, minor in Bioinformatics. 
                 I have always had a passion for using automation to solve complex problems and help people. Through my studies at Washingtion University 
                 in St. Louis, I have learned the art of problem-solving; breaking extremely complex problems down into actionable tasks. Something I just 
                 learned in class has become a way of life with a community I cannot imagine not being a part of. I love computer science, programming,
                 building applications and I aim to use my skills and passion to aid people. 
                 But don't just take my word for it. Check out my resume and feel free to connect with me on any of my socials linked below.</div>
                
            </div>
        </div>
    </div>
  );
}

export default AboutMe;
