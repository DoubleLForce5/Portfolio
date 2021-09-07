import React from 'react';
import './style.css';

function Nav() {
  return (
    <div>
      <nav id='nav'>
        <h3 id='site-title'>Olivia Lopez</h3>
          <ul id='nav-items'>
            <li className='nav-item'>
              <a href="/projects">Projects</a>
            </li>
            <li className='nav-item'>
              <a href="/about">About</a>
            </li>
            <li className='nav-item'>
              <a href="/contact">Contact</a>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Nav; 