import React from 'react';
import ProjectImageContainer from '../ProjectImageContainer';
import './style.css';

function ProjectCard (props) {
    return (
    <section className='project-card'>
      <ProjectImageContainer
      />
      <div className='project-card-content'>
        {props.children}
      </div>
    </section>
    )

}

export default ProjectCard;