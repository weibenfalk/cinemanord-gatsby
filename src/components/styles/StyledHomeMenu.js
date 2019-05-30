import styled from 'styled-components';

export const StyledMenu = styled.div`
  position: relative;
  display: none;

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  #cinemanord-ul {
    font-family: 'Quicksand', Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    color: white;
    margin-bottom: 0;
  }
  #cinemanord-ul * {
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    color: white;
  }
  #cinemanord-ul li {
    color: white;
    list-style: outside none none;
    overflow: hidden;
    margin: 0;
    max-width: 200px;
  }
  #cinemanord-ul a {
    padding: 0.3em 0;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    margin: 0;
    text-decoration: none;
  }
  #cinemanord-ul a:before,
  #cinemanord-ul a:after {
    color: white;
    position: absolute;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  #cinemanord-ul a:after {
    color: white;
    padding: 5px 0;
    position: absolute;
    bottom: 100%;
    left: 0;
    content: attr(data-hover);
    color: white;
    white-space: nowrap;
    font-weight: 800;
    cursor: pointer;
  }
  #cinemanord-ul li:hover a,
  #cinemanord-ul .current a {
    transform: translateY(100%);
    color: white;
  }

  /* reset defaults */
  ul {
    list-style: none;
  }

  ul li {
    margin: 5px;
  }

  #cinemanord-ul::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    width: 3px;
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
    background: linear-gradient(
      to bottom,
      #307853 0%,
      #6ed4bc 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#307853', endColorstr='#6ed4bc',GradientType=0 ); /* IE6-9 */
  }
`;
