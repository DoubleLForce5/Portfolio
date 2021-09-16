import React from "react";
import FooterSection from "../components/FooterSection";

function Footer() {
  return (
    <>
      <FooterSection>
        <div className="footer-content">
        <p className="footer-text">
          Site made with{" "}
          <span role="img" aria-label="red heart emoji">
            &#9825;
          </span>{" "}
          by Olivia
        </p>
        </div>
      </FooterSection>
    </>
  );
}

export default Footer;
