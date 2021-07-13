import React from 'react';
import './style.css';

function ImageContainer (props) {
  return (
    <div id='img-container'>
      <img id={props.img} src={props.src} alt={props.alt}/>
    </div>
  )
};

export default ImageContainer;