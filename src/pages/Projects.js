import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectCardsContainer from "../components/ProjectCardsContainer";
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
    img: "assets/google-books-search.png",
    github: "https://github.com/DoubleLForce5/Google_Book_Search",
    url: "https://google-books-search-app1.herokuapp.com/",
    title: "Google Books Search",
    tech: "Google Books API, React Router Dom, Javascript, Node.js, Bootstrap, Nodemon, Dotenv, MongoDB, Mongoose, Heroku, React, Axios, HTML, CSS",
    description: "This application utilizes the Google Books API to allow users the ability to search for and save books.",
  },
  {
    img: "assets/employee-directory.png",
    github: "https://github.com/DoubleLForce5/Employee_Directory",
    url: "https://doublelforce5.github.io/Employee_Directory/",
    title: "Employee Directory",
    tech: "Random User API, Javascript, Bootstrap, Gh pages, Date-fns, React, Axios, HTML, CSS",
    description: "The employee directory allows its user to view, filter, and sort non-sensitive data about other employees"
  },
  {
    img: "assets/tech-blog.png",
    github: "https://github.com/DoubleLForce5/CMS_Tech_Blog",
    url: "https://cmstechblog.herokuapp.com/",
    title: "CMS Tech Blog",
    tech: "Mysql, Node.js, Dotenv, Nodemon, Sequelize, Express, Handlebars, Javascript, CSS, HTML",
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
        <em id="projects">Projects</em>

      </SectionTitle>

      <ProjectCardsContainer>
      {projects.map((project) => renderProjectCards(project))}
      </ProjectCardsContainer>
    </>
  );
}

export default Projects;
