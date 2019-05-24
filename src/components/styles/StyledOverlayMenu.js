import styled from 'styled-components';

export const StyledOverlay = styled.div`
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  letter-spacing: 2px;
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 9999;
  background: #000;
  left: 0px;
  padding: 20px;
  transition: all 0.3s ease;

  .overlayActive {
    color: #c86dd7;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 40px;

    .whiteLogo {
      max-width: 400px;
      margin: 0 0 60px 0;
    }

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 20px 0;
      }

      li.overlayActive {
        color: #d22e26;
      }

      a {
        font-family: 'Quicksand', Arial, Helvetica, sans-serif;
        font-size: 1.3rem;
        text-decoration: none;
        color: #fff;
        transition: all 0.3s ease;

        :hover {
          color: #c86dd7;
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;
    outline: 0;

    :hover {
      transform: rotate(180deg);
    }
  }
`;
