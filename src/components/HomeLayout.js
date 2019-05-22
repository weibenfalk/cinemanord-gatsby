import React from 'react';
import styled from 'styled-components';

import cnLogo from '../images/cn_logo.png';

const HomeLayoutWrapper = styled.div`
  z-index: 10;
  color: white;
  position: absolute;
  bottom: 15%;
  left: 10%;
`;

const HomeLayout = ({ children }) => (
  <HomeLayoutWrapper>
    <img src={cnLogo} alt="cnLogo" />
    {children}
  </HomeLayoutWrapper>
);

export default HomeLayout;
