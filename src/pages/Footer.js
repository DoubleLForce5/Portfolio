import React from "react";
import FooterSection from "../components/FooterSection";

function Footer() {
  return (
    <>
      <FooterSection>
        <div className="footer-content">
          <p className="footer-text">
            Designed with{" "}
            <span role="img" aria-label="red heart emoji">
              &#9825;
            </span>{" "} by Olivia Lopez
          </p>
          <p className="footer-text">Built with HTML, CSS, JavaScript, & React</p>
        </div>
      </FooterSection>
    </>
  );
}

export default Footer;
