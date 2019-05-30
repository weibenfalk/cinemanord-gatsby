import React from 'react';
import styled from 'styled-components';

import Facebook from '../images/ca-fb.svg';
import LinkedIn from '../images/ca-linkedin.svg';
import Instagram from '../images/cn-insta.svg';
import Twitter from '../images/cn-twitter.svg';

const StyledSocial = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 20px;
  position: fixed;
  height: 70px;
  z-index: 100;
  bottom: 40px;
  left: 50px;
`;

const StyledIcons = styled.div`
  a {
    margin-right: 10px;

    :last-child {
      margin-right: 0;
    }
  }
  img {
    max-width: 30px;
    height: auto;
  }
`;

const Social = () => (
  <StyledSocial>
    <StyledIcons>
      <a href="">
        <img src={Facebook} alt="cn-facebook" />
      </a>
      <a href="">
        <img src={Twitter} alt="cn-twitter" />
      </a>
      <a href="">
        <img src={LinkedIn} alt="cn-linkedin" />
      </a>
      <a href="">
        <img src={Instagram} alt="cn-instagram" />
      </a>
    </StyledIcons>
  </StyledSocial>
);

export default Social;
