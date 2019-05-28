import styled from 'styled-components';

export const HomeOverlayWrapper = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HomeLayoutWrapper = styled.div`
  z-index: 10;
  color: white;
  position: absolute;
  top: 40px;
  left: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  align-self: center;
  height: 90%;

  img {
    max-width: 150px;
    height: auto;
    align-self: start;
    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    top: 50%;
    left: 10%;
    justify-content: start;
    height: auto;

    img {
      max-width: 250px;
      height: auto;
      align-self: start;
    }
  }

  @media (min-width: 1200px) {
  }
`;
