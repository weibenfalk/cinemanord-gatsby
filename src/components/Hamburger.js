import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  position: absolute;
  right: 40px;
  top: 30px;
  z-index: 300000;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 40px;
    height: 5px;
    margin: 7px 0;
    border-radius: 20px;
    transition: 0.4s;
    background: #3023ae; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #3023ae 0%,
      #c86dd7 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #3023ae 0%,
      #c86dd7 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #3023ae 0%, #c86dd7 100%);
  }
`;

const Hamburger = ({ callback }) => (
  <StyledHamburger onClick={callback}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </StyledHamburger>
);

export default Hamburger;
