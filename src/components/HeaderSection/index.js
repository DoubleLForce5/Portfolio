import React from "react";
import ImageContainer from "../ImageContainer";
import "./style.css";

function HeaderSection(props) {
  return (
    <section id="header-section">
      <div>
        <ImageContainer
          src="assets/laptop-working-night.svg"
          alt="Illustration of a girl working on a laptop in a big city"
          id="header-img"
        />
      </div>
      <div id="header-content">{props.children}</div>
    </section>
  );
}

export default HeaderSection;
