import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillsSection from '../components/SkillsSection';

function Skills() {
  return (
    <>
      <SectionTitle>
        <em>Skills</em>
      </SectionTitle>

      <SkillsSection>
        <li><img src="assets/node.jpg"/></li>
      </SkillsSection>


    </>
  )
}

export default Skills;