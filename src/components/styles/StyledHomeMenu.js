import styled from 'styled-components';

export const StyledMenu = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: relative;

  #test-ul {
    font-family: 'Raleway', Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    color: white;
  }
  #test-ul * {
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    color: white;
  }
  #test-ul li {
    color: white;
    list-style: outside none none;
    overflow: hidden;
  }
  #test-ul a {
    padding: 0.3em 0;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    margin: 0;
    text-decoration: none;
  }
  #test-ul a:before,
  #test-ul a:after {
    color: white;
    position: absolute;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  #test-ul a:after {
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
  #test-ul li:hover a,
  #test-ul .current a {
    transform: translateY(100%);
    color: white;
  }

  /* #test-ul a {
    transition: 0.4s;
    color: #fff;
    text-decoration: none;
  }

  #test-ul a:hover {
    background-color: #ffffff;
    color: #fff;
    padding: 5px 5px;
    border-radius: 20px;
  } */

  /* reset defaults */
  ul {
    list-style: none;
  }

  ul li {
    margin: 5px;
  }

  #test-ul::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #3023ae; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #3023ae 0%,
      #c86dd7 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #3023ae 0%,
      #c86dd7 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #3023ae 0%,
      #c86dd7 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3023ae', endColorstr='#c86dd7',GradientType=0 ); /* IE6-9 */
  }
`;
