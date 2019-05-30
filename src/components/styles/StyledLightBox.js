import styled from 'styled-components';

export const StyledLightBox = styled.div`
  background: rgb(0, 0, 0, 0.9);
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200000;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text-wrapper {
    width: 80vw;
    background: #000;
    padding: 40px;

    @media (min-width: 992px) {
      width: 50vw;
      height: calc(50vw / 16 * 9);
    }
  }

  .player-wrapper {
    position: relative;
    width: 80vw;
    height: calc(80vw / 16 * 9);
    margin: 0 0 40px 0;

    @media (min-width: 992px) {
      width: 50vw;
      height: calc(50vw / 16 * 9);
    }

    :after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(235deg, #307853, #6ed4bc);
      z-index: -2;
      filter: blur(20px);
      opacity: 0.3;
    }
  }

  .header {
    color: linear-gradient(45deg, #307853, #6ed4bc);
    background: linear-gradient(#307853, #6ed4bc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Quicksand', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.6rem;

    @media (min-width: 992px) {
      font-size: 2.2rem;
    }
  }
`;
