import React from 'react';
import './AboutMe.css';
import image1 from './files/clark_headshot.jpg';

function AboutMe() {
  return (
    <div className="container" id="aboutus">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <img src={image1} alt="Me" className="rounded-circle" height="400" width="400" />
            </div>
            <div className="col-md-6 col-sm-12">
                <p style={{textAlign:'center', fontFamily:"Georgia", fontStyle:'italic'}}>
                <h2 style={{fontStyle:"normal"}}>About Me</h2>
                <h4>I have never seen a greater monster or miracle in the world than myself</h4> </p>
                <p>Hi! I am a third year undergraduate at Washington University in St. Louis 
                  School of Engineering pursuing a Bachelor of Science degree in Computer Science with a 
                  minor in Bioinformatics. I began working with the Clinical Interpretation of Variants in 
                  Cancer (CIViC) project as a Lab Assistant under the mentorship of Dr. Malachi Griffith as a first-year 
                  student. My research concerns the curation of information relating to von-Hippel Lindau disease (VHLD),
                   a neoplastic syndrome resulting from the inactivation of the VHL tumor suppressor gene. My project 
                   aides to the overall goal of the CIViC project by developing a comprehensive web source of VHL variants. 
                   I also work as a Teaching Assistant for Introduction to Computer Science (CSE131), where I grade exams, 
                   review implementation and provide a conceptual understanding of various Java data structures. My ongoing 
                   interests concern the enablement of precision medicine through the identification of clinically 
                   relevant variants that aid in better prognosis and diagnosis of cancer syndromes and the development 
                   of web resources to aid in the interpretation and discovery of such clinically relevant variants. In 
                   the future, I hope to pursue an MD/PhD in integrative genomics or a PhD in Bioinformatics.</p>
                
            </div>
        </div>
    </div>
  );
}

export default AboutMe;