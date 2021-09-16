import React from "react";
import SectionTitle from "../components/SectionTitle";
import AboutSection from "../components/AboutSection";

function About() {
  return (
    <>
      <SectionTitle>
        <em id="about">About Me</em>
      </SectionTitle>

      <AboutSection>
        <p className="about-me-text">
          Hi again, thanks for scrolling down this far!!
          <span role="img" aria-label="Grinning Smiley Face with Big Eyes">
            {" "}
            &#128515;
          </span>{" "}
        </p>
        <p className="about-me-text">
          I recently graduated from Southern Methodist University with a
          certificate in full-stack development. I also hold a bachelor's degree
          from the University of Dallas in Business.
        </p>
        <p className="about-me-text">
          I have an aptitude for HTML, CSS, JavaScript, and Node.js with
          strengths in problem-solving, meeting deadlines, and teamwork. With
          each project, my goal is to engage my audience and provide an
          impactful user experience.
        </p>
      </AboutSection>
    </>
  );
}

export default About;
