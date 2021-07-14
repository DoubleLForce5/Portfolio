import React from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

function Projects () {

  const projects = [
    {
      img: 'assets/CMS-blog.png',
      github: 'https://github.com/DoubleLForce5/CMS_Tech_Blog',
      url: 'https://aqueous-gorge-22961.herokuapp.com/',
      title: 'CMS Blog',
      tech: 'Mysql, Node.js, Dotenv, Nodemon, Sequelize, Express, Handlebars, Javascript',description: 'CMS-style blog site where individuals can publish posts, articles, thoughts, and opinions.'
    },
    {
      img: 'assets/CMS-blog.png',
      github: 'https://github.com/DoubleLForce5/CMS_Tech_Blog',
      url: 'https://aqueous-gorge-22961.herokuapp.com/',
      title: 'CMS Blog',
      tech: 'Mysql, Node.js, Dotenv, Nodemon, Sequelize, Express, Handlebars, Javascript',description: 'CMS-style blog site where individuals can publish posts, articles, thoughts, and opinions.'
    },
    {
      img: 'assets/CMS-blog.png',
      github: 'https://github.com/DoubleLForce5/CMS_Tech_Blog',
      url: 'https://aqueous-gorge-22961.herokuapp.com/',
      title: 'CMS Blog',
      tech: 'Mysql, Node.js, Dotenv, Nodemon, Sequelize, Express, Handlebars, Javascript',description: 'CMS-style blog site where individuals can publish posts, articles, thoughts, and opinions.'
    }
  ]

  function renderProjectCards ({
    img, 
    github, 
    url, 
    title, 
    tech, 
    description}) {
    return (
      <ProjectCard
        img={img}
        github={github}
        url={url}
        title={title}
        tech={tech}
        description={description}
      />
    )
  }

  return (
    <>
    <SectionTitle>
    <em>Projects</em>
    </SectionTitle>
      
    <ProjectCard>
    {projects.map((project) => renderProjectCards(project))}
    </ProjectCard>
    </>
  )
}

export default Projects;