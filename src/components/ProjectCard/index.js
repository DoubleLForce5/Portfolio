import React from "react";
import "./style.css";

function ProjectCard(props) {
  console.log("props", props);
  const { img, github, url, title, tech, description } = props.project;
  return (
    <section className="project-card">
      <div className="project-img-container">
        <img className="project-img" src={img} alt={title} />
      </div>
      <div className="project-card-content">
        <div className="project-links">
          <a href={url} target="_blank" aria-label="link to deployed site" rel="noopener noreferrer">
            <i class="bi bi-link-45deg"></i>
          </a>
          <a href={github} target="_blank" aria-label="link to github repo" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
        </div>
        <h3 className="project-title"><span className='project-title-highlight'>{title}</span></h3>
        <ul className="project-topics">Tech featured:{tech}</ul>
        <p className="project-description">{description}</p>
      </div>
    </section>
  );
}

export default ProjectCard;
