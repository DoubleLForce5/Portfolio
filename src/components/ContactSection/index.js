import React from 'react';
import './style.css';

function ContactSection(props) {
  return (
    <section id='contact-section'>
      <div id="contact-content">
        {props.children}
      </div>
    </section>
  )
}

export default ContactSection;