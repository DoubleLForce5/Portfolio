import React from "react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    img: "assets/CMS-blog.png",
    github: "https://github.com/DoubleLForce5/CMS_Tech_Blog",
    url: "https://aqueous-gorge-22961.herokuapp.com/",
    title: "CMS Blog",
    tech: "Mysql, Node.js, Dotenv, Nodemon, Sequelize, Express, Handlebars, Javascript",
    description:
      "CMS-style blog site where individuals can publish posts, articles, thoughts, and opinions.",
  },
  {
    img: "assets/CMS-blog.png",
    github: "https://github.com/DoubleLForce5/CMS_Tech_Blog",
    url: "https://aqueous-gorge-22961.herokuapp.com/",
    title: "CMS Blog",
    tech: "Mysql, Node.js, Dotenv, Nodemon, Sequelize, Express, Handlebars, Javascript",
    description:
      "CMS-style blog site where individuals can publish posts, articles, thoughts, and opinions.",
  },
  {
    img: "assets/CMS-blog.png",
    github: "https://github.com/DoubleLForce5/CMS_Tech_Blog",
    url: "https://aqueous-gorge-22961.herokuapp.com/",
    title: "CMS Blog",
    tech: "Mysql, Node.js, Dotenv, Nodemon, Sequelize, Express, Handlebars, Javascript",
    description:
      "CMS-style blog site where individuals can publish posts, articles, thoughts, and opinions.",
  },
];

function Projects() {
  function renderProjectCards(project) {
    console.log("from project page", project);
    return <ProjectCard project={project} />;
  }

  return (
    <>
      <SectionTitle>
        <em>Projects</em>
      </SectionTitle>

      {projects.map((project) => renderProjectCards(project))}
    </>
  );
}

export default Projects;
