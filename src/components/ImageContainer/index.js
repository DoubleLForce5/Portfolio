import React from 'react';
import './style.css';

function ImageContainer (props) {
  return (
    <div id='img-container home'>
      <img id={props.id} src={props.src} alt={props.alt}/>
    </div>
  )
};

export default ImageContainer;