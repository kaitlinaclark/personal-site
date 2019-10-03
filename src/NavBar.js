import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="collapse navbar-collapse justify-content-center" id="navbar">
                <ul class="navbar-nav">
                    <li><a class="nav-link" href="#home">Home</a></li>
                    <li><a class="nav-link" href="#aboutus">About Me</a></li>
                    <li><a class="nav-link" href="https://github.com/kaitlinaclark?tab=repositories">Portfolio</a></li>           
                    <li><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default NavBar;
