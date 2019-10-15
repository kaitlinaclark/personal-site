import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse justify-content-end" id="navbar">
                <ul className="navbar-nav connect">
                    <li className="nav-link">Connect with me!</li>
                </ul>
                <ul className="navbar-nav">
                    <li><a className="nav-link fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/kaitlin-a-clark-187885a5/">  LinkedIn</a></li>
                    <li><a className="nav-link fa fa-lg fa-github" href="https://github.com/kaitlinaclark"> Github Repo</a></li>
                    <li><a className="nav-link fa fa-lg fa-twitter" href="https://twitter.com/kaitlinaclark">  Twitter</a></li>
                </ul>
            </div>
        </nav>
    </footer>
  );
}

export default Footer;
