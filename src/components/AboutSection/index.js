import React from 'react';
import AboutImageContainer from '../AboutImageContainer';
import './style.css';

function AboutSection(props) {
  return (
    <section id='about-section'>
      <div>
        <AboutImageContainer id='about-img' src='assets/me-CO-2.jpg' alt='Casual picture of me smiling'/>
      </div>
      <div id='about-content'>
        {props.children}
      </div>
    </section>
  )
}

export default AboutSection;