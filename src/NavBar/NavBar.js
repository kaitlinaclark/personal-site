import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse justify-content-center" id="navbar">
                <ul className="navbar-nav">
                    <li><a className="nav-link" href="#home">Home</a></li>
                    <li><a className="nav-link" href="#aboutus">About Me</a></li>
                    <li><a className="nav-link" href="#portfolio">Portfolio</a></li>           
                    <li><a className="nav-link" href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default NavBar;
