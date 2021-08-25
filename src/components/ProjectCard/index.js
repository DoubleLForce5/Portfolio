import React from "react";
import "./style.css";

function ProjectCard(props) {
  console.log("props", props);
  const { img, github, url, title, tech, description } = props.project;
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img className="project-img" src={img} alt={title} />
      </div>
      <div className="project-card-content">
        <div className="project-links">
          <a className='url-link' href={url} target="_blank" aria-label="link to deployed site" rel="noopener noreferrer">
            <i className="url bi bi-link-45deg"></i>
          </a>
          <a className='github-link' href={github} target="_blank" aria-label="link to github repo" rel="noopener noreferrer">
            <i className="github bi bi-github"></i>
          </a>
        </div>
        <h3 className="project-title"><span className='project-title-highlight'>{title}</span></h3>
        <p className="project-description">{description}</p>
        <ul className="project-topics"><span className='tech-featured'>Technology Featured:</span> {tech}</ul>
      </div>
    </div>
  );
}

export default ProjectCard;
