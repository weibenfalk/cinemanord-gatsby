import styled from 'styled-components';

export const StyledSocial = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 20px;
  position: fixed;
  height: 70px;
  z-index: 1000;
  bottom: 32px;
  left: 50px;
  display: flex;

  @media (max-width: 768px) {
    display: none;
    left: 30px;
    height: auto;
  }

  .modeButton {
    margin-left: 20px;
    z-index: 100000;

    p {
      color: #fff;
    }
  }
`;

export const StyledIcons = styled.div`
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

  @media (max-width: 425px) {
    img {
      max-width: 20px;
    }
  }
`;
