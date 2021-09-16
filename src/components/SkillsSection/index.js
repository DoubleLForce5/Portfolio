import React from "react";
import "./style.css";

function SkillsSection(props) {
  return (
    <section id="skills-section">
      <ul id="skills">{props.children}</ul>
    </section>
  )
}

export default SkillsSection;