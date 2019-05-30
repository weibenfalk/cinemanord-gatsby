import styled from 'styled-components';

export const StyledPageMenu = styled.nav`
  margin: 5px 0 0 0; /* just to give some spacing */
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  letter-spacing: 2px;
  display: none;
  float: right;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .nav-active {
    color: #d22e26;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }

  ul li {
    display: block;
    margin: 0 10px 0 0;
    float: left;
    height: 30px; /* this should be the same as your #main-nav height */
    position: relative; /* this is needed in order to position sub menus */

    a {
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-image: black;
      padding: 5px 10px;
      border-radius: 25px;
      position: relative;
      z-index: 100;

      &:before {
        border-radius: inherit;
        background-image: linear-gradient(45deg, #307853, #6ed4bc);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        z-index: -100;
        transition: opacity 0.45s;
      }

      &:hover {
        &:before {
          opacity: 1;
        }
      }
    }

    span {
      margin: 0 0 0 5px;
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block; /* show sub menus when hovering over a parent */
  }

  /* ul li a:hover {
    background: linear-gradient(45deg, #307853, #6ed4bc);
  } */

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none; /* hide all sub menus from view */
    position: absolute;
    left: 0;
    margin: 0;
    top: 30px; /* this should be the same height as the top level menu -- height + padding + borders */
    padding: 5px 5px 10px 5px;
    text-transform: none;
    background: #fff; /* Old browsers */
    -webkit-box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    /* this targets all submenu items */
    width: auto; /* set to the width you want your sub menus to be. This needs to match the value we set below */
    min-width: 170px;
  }

  ul ul li a {
    /* target all sub menu item links */
    padding: 5px 10px; /* give our sub menu links a nice button feel */
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
