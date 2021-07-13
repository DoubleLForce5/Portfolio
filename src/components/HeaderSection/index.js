import React from 'react';
import ImageContainer from '../ImageContainer';
import './style.css'

function HeaderSection(props) {
  return (
    <section>
      <div>
        <ImageContainer id='img' src='assets/laptop-working-night.svg' alt='Illustration of a girl working on a laptop in a big city'/>
      </div>
      <div>
      {props.children}
      </div>
    </section>

  )
}

export default HeaderSection;