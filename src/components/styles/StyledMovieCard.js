import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledImg = styled(Img)`
  height: 100%;
  img {
    -moz-transition: all 0.3s !important;
    -webkit-transition: all 0.3s !important;
    transition: all 0.3s !important;
    z-index: 1;

    @media (min-width: 768px) {
    }
  }
`;

export const MovieImage = styled.div`
  height: 400px;
  cursor: pointer;
  img {
  }
  margin-bottom: 0px;
  :hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
  }
`;

export const MovieImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0px;
  width: calc(100% - 30px);
  height: calc(100% - 20px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .pWrapper {
    background: rgb(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 20px;
  }
`;

export const MovieImageText = styled.p`
  letter-spacing: 1.5px;
  font-size: 1.2rem !important;
  margin: 0px;
  padding: 0px;
  color: #fff;

  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
