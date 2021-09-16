import React from "react";
import "./style.css";

function FooterSection(props) {
  return (
    <section id="footer-section">
      <div id="footer-content">{props.children}</div>
    </section>
  );
}

export default FooterSection;
