import React from 'react';
import './style.css';

function AboutImageContainer(props) {
  return (
    <div id='about-img-container'>
      <img id={props.id} src={props.src} alt={props.alt}/>
    </div>
  )
};

export default AboutImageContainer;