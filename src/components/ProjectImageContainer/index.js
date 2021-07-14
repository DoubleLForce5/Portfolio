import React from 'react';
import './style.css';

function ProjectImageContainer (props) {
  return (
    <div id='project-img-container'>
      <img id={props.img} src={props.src} alt={props.alt} />
    </div>
  )
};

export default ProjectImageContainer;