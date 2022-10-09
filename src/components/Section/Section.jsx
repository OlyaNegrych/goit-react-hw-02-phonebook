import React from 'react';
import {SectionBox} from '../Section/Section.styled'

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <h2>{title}</h2>
      {children}
    </SectionBox>
  );
};

export default Section;
