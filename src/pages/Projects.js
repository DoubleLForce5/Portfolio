import React from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

function Projects () {

  return (
    <>
    <SectionTitle>
    <em>Projects</em>
    </SectionTitle>

    <ProjectCard>
      <div className='project-links'>Link</div>
      <h3 className='project-title'>title</h3>
      <ul className='project-topics'>tops</ul>
      <p className='project-description'>description</p>
    </ProjectCard>
    </>
  )
}

export default Projects;