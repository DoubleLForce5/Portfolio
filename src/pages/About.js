import React from "react";
import AboutSection from "../components/AboutSection";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <>
      <SectionTitle>
        <em>About Me</em>
      </SectionTitle>

      <AboutSection>
        <p className="about-me-text">
          Hi again, thanks for scrolling down this far!!
          <span role="img" aria-label="Grinning Smiley Face with Big Eyes">
            {" "}
            &#128515;
          </span>{" "}
        </p>
        <p>
          I recently graduated from Southern Methodist University with a
          certificate in full-stack development. I also hold a bachelor's degree
          from the University of Dallas in Business.
        </p>
        <p>
          I have an aptitude for HTML, CSS, JavaScript, and Node.js with
          strengths in problem-solving, meeting deadlines, and teamwork. With
          each project, my goal is to engage my audience and provide an
          impactful user experience. I am eager to hit the ground running and
          build upon my skills as a part of a dynamic team dedicated to
          constructing great things.
        </p>
      </AboutSection>
    </>
  );
}

export default About;
