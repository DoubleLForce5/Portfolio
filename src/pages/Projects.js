import React from "react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    img: "assets/replay.png",
    github: "https://github.com/DoubleLForce5/Replay",
    url: "https://replayvideos.herokuapp.com/",
    title: "Replay",
    tech: "MongoDB, Mongoose, Express, React, Node.js, Connect-Mongo-NPM, Bootstrap, Axios, Bcrypt, HE-NPM, Google Youtube API, Dotenv, Nodemon, React-Youtube-NPM, Heroku, Javascript, CSS, HTML",
    description: "Video streaming application that allows users to query for content using the Google Youtube API and add that content to individual and customizable playlists.",
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
    img: "assets/tech-blog.png",
    github: "https://github.com/DoubleLForce5/CMS_Tech_Blog",
    url: "https://cmstechblog.herokuapp.com/",
    title: "CMS Tech Blog",
    tech: "Mysql, Node.js, Dotenv, Nodemon, Sequelize, Express, Handlebars, Javascript, CSS",
    description: "CMS-style blog site where individuals can publish posts, articles, thoughts, and opinions."
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
