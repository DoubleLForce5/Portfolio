import React from 'react';
import './style.css';

function ProjectCard (
{  img, 
  github, 
  url, 
  title, 
  tech, 
  description}) {
    console.log(title)
    return (
    <section className='project-card'>
      <div className='project-card-content'>
      <div>
        <img src={img} alt={title}/>
      </div>
      <div className='project-links'>Link</div>
      <h3 className='project-title'>{title}</h3>
      <ul className='project-topics'>topics</ul>
      <p className='project-description'>description</p>
      </div>
    </section>
    )

}

export default ProjectCard;