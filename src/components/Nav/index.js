import React from 'react';
import './style.css';

function Nav() {
  return (
    <div>
      <nav id='nav'>
      <h1><a id="site-title" href="#home">Olivia Lopez</a></h1>
          <ul id='nav-items'>
            <li className='nav-item'><a href="#projects">Projects</a>
            </li>
            <li className='nav-item'>
              <a href="#about">About</a>
            </li>
            <li className='nav-item'>
              <a href="assets/olivia-lopez-resume.pdf"
            target="_blank">Resume</a>
            </li>
            <li className='nav-item'>
              <a href="#contact">Contact</a>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Nav; 