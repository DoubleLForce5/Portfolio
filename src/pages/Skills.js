import React from "react";
import SectionTitle from "../components/SectionTitle";
import SkillsSection from "../components/SkillsSection";

function Skills() {
  return (
    <>
      <SectionTitle>
        <em>Skills</em>
      </SectionTitle>

      <SkillsSection>
        <li className="icon">
          <i className="fab fa-html5 html5-icon"></i>
          <p className="skills-icon-text">HTML5</p>
        </li>
        <li className="icon">
          <i class="fab fa-css3-alt css3-icon"></i>
          <p className="skills-icon-text">CSS3</p>
        </li>
        <li className="icon">
          <i class="fab fa-js js-icon"></i>
          <p className="skills-icon-text">JavaScript</p>
        </li>
        <li className="icon">
          <i class="fab fa-node node-icon"></i>
          <p className="skills-icon-text">Node.js</p>
        </li>
        <li className="icon">
          <i class="fab fa-react react-icon"></i>
          <p className="skills-icon-text">React.js</p>
        </li>
        <li className="icon">
          <img class="jquery-icon" src="assets/jquery.svg" alt="jquery icon" />
          <p className="skills-icon-text">jQuery</p>
        </li>
        <li className="icon">
          <img
            class="express-icon"
            src="assets/express.svg"
            alt="express icon"
          />
          <p className="skills-icon-text">Express.js</p>
        </li>
        <li className="icon">
          <img
            class="webpack-icon"
            src="assets/webpack.svg"
            alt="webpack icon"
          />
          <p className="skills-icon-text">Webpack</p>
        </li>
        <li className="icon">
          <img class="mysql-icon" src="assets/mysql.svg" alt="mysql icon" />
          <p className="skills-icon-text">MySQL</p>
        </li>
        <li className="icon">
          <img
            class="mongodb-icon"
            src="assets/mongodb.svg"
            alt="mongoDB icon"
          />
          <p className="skills-icon-text">MongoDB</p>
        </li>
        <li className="icon">
          <img class="heroku-icon" src="assets/heroku.svg" alt="heroku icon" />
          <p className="skills-icon-text">Heroku</p>
        </li>
        <li className="icon">
          <i class="bi bi-bootstrap"></i>
          <p className="skills-icon-text">Bootstrap</p>
        </li>
        <li className="icon">
          <i class="bi bi-github"></i>
          <p className="skills-icon-text">GitHub</p>
        </li>
        <li className="icon">
          <img
            class="adobe-creative-cloud-icon"
            src="assets/adobe.svg"
            alt="adobe creative cloud icon"
          />
          <p className="skills-icon-text">Adobe Creative Cloud</p>
        </li>
      </SkillsSection>
    </>
  );
}

export default Skills;
