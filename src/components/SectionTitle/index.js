import React from 'react';
import './style.css'

function SectionTitle (props){
  return (
    <div className='section-title'>
      <h2 className='title'>{props.children}</h2></div>
  )
};

export default SectionTitle;