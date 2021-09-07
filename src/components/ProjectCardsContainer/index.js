import React from 'react';
import './style.css';

function ProjectCardsContainer(props) {
  return <section className='project-cards-container'>{props.children}</section>
}

export default ProjectCardsContainer;