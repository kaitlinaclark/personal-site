import React from 'react';
import './Home.css';
import file1 from './files/Clark_Kaitlin_Res.pdf';

function Home() {
  return (
    <section id="home" className="home-banner" >
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <h1>Kaitlin A Clark</h1>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-6">
                      <blockquote>When nothing is certain, anything is possible.</blockquote>
                  </div>
                  
              </div>
              <div className="row btn-bar justify-content-center">
                <a href={file1} className="m-btn-link m-btn-link-white theme-after">Download Resume</a>
                
              </div>
          </div>
      </section>
        
  );
}

export default Home;
