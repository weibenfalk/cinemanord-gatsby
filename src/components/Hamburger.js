import React from 'react';

import { StyledHamburger } from './styles/StyledHamburger';

const Hamburger = ({ callback }) => (
  <StyledHamburger onClick={callback}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </StyledHamburger>
);

export default Hamburger;
