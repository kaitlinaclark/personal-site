import React from 'react';
import './Home.css';
import file1 from './files/Clark_Kaitlin_Res.pdf';

function Home() {
  return (
    <section id="home" className="home-banner" >
          <div class="container-fluid">
              <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <h1>Kaitlin A Clark</h1>
                  </div>
              </div>
              <div class="row justify-content-center">
                  <div class="col-6">
                      <blockquote>When nothing is certain, anything is possible.</blockquote>
                  </div>
                  
              </div>
              <div class="row btn-bar justify-content-center">
                <a href={file1} class="m-btn-link m-btn-link-white theme-after">Download Resume</a>
                
              </div>
          </div>
      </section>
        
  );
}

export default Home;
