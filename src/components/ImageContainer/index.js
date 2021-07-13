import React from 'react';
import './style.css';

function ImageContainer (props) {
  return (
    <div className='img-container'>
      <img src={props.src} alt={props.alt}/>
    </div>
  )
}

export default ImageContainer;