import React from "react";
import SectionTitle from "../components/SectionTitle";
import ContactSection from "../components/ContactSection";

function Contact() {
  return (
    <>
      <SectionTitle>
        <em id="contact">Let's Connect</em>
      </SectionTitle>

      <ContactSection>
        <p className="contact-text">
          See something interesting, or wanna have a quick chat?
        </p>
        <p className="email-tag">
          <a
            className="email"
            href="mailto:lopez.olivia17@outlook.com"
            target="_blank"
            aria-label="link to my email"
            rel="noopener noreferrer"
          >
            lopez.olivia17@outlook.com
          </a>
        </p>
        <div className="contact-links">
          <a
            className="linkedin-icon contact-icon"
            href=//"https://www.linkedin.com/in/olivialopez17/"
            target="_blank"
            aria-label="link to my linkedIn"
            rel="noopener noreferrer"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            className="github-icon contact-icon"
            href="https://github.com/DoubleLForce5"
            target="_blank"
            aria-label="link to my github"
            rel="noopener noreferrer"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            className="resume-icon contact-icon"
            href=//"assets/olivia-lopez-resume.pdf"
            target="_blank"
            aria-label="link to my resume"
            rel="noopener noreferrer"
          >
            <i class="bi bi-file-earmark-person-fill"></i>
          </a>
        </div>
      </ContactSection>
    </>
  );
}

export default Contact;
