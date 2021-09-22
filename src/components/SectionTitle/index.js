import React from 'react';
import './style.css'

function SectionTitle (props){
  return (
    <div className='section-title'>
      <h1 className='title'>{props.children}</h1></div>
  )
};

export default SectionTitle;