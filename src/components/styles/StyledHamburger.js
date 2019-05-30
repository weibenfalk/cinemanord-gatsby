import styled from 'styled-components';

export const StyledHamburger = styled.div`
  position: absolute;
  right: 40px;
  top: 31px;
  z-index: 200;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    opacity: 0.7;
  }

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
    background: #307853; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #307853 0%,
      #6ed4bc 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #307853 0%,
      #6ed4bc 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #307853 0%, #6ed4bc 100%);
  }
`;
