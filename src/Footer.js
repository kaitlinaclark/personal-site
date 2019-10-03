import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse justify-content-end" id="navbar">
                <ul className="navbar-nav connect">
                    <li className="nav-link">Connect with me!</li>
                </ul>
                <ul class="navbar-nav">
                    <li><a class="nav-link fa fa-lg fa-instagram" href="instagram.com">  Instagram</a></li>
                    <li><a class="nav-link fa fa-lg fa-github" href="github.com"> Github Repo</a></li>
                    <li><a class="nav-link fa fa-lg fa-twitter" href="twitter.com">  Twitter</a></li>
                </ul>
            </div>
        </nav>
    </footer>
  );
}

export default Footer;
