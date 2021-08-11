import React from "react";
import HeaderSection from "../components/HeaderSection";

function Header() {
  return (
    <HeaderSection>
      <h3 className='header-title'>
        <span className="highlight">
          Hello, I'm Olivia!{" "}
          <span role="img" aria-label="Hand waving hello:  Medium Skin Tone">
            &#128075;&#127997;
          </span>
        </span>
      </h3>

      <p className='header-text'>
        A multidisciplinary Full Stack Developer currently based in Dallas,
        Texas. I build user-friendly, engaging, and responsive applications.
        <span
          role="img"
          aria-label="Woman Technologist: Medium Skin Tone Emoji"
        >
          &#128105;&#127997;&#8205;&#128187;
        </span>
      </p>

      <p className='header-text'>
        Keep scrolling to check out some of my most recent work.
        <span role="img" aria-label="Sparkles Emoji">
          &#10024;
        </span>
      </p>
    </HeaderSection>
  );
}

export default Header;
