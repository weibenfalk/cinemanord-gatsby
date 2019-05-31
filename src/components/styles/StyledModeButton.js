import styled from 'styled-components';

export const StyledModeButton = styled.div`
  display: flex;

  p {
    font-size: 0.7rem;
    display: block;
    margin: 0 10px 0 0;
  }
  .toggle {
    display: none;
  }

  .toggle + .toggle-button {
    outline: 0;
    display: inline-block;
    width: 3em;
    height: 1.6em;
    position: relative;
    cursor: pointer;
    border: 2px solid #333;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .toggle + .toggle-button:after,
  .toggle + .toggle-button:before {
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
  }

  .toggle + .toggle-button:after {
    left: 0;
  }

  .toggle + .toggle-button:before {
    display: none;
  }

  .toggle:checked + .toggle-button:after {
    left: 50%;
  }

  .toggle + .toggle-button {
    padding: 2px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border: 2px solid #6ed4bc;
    border-radius: 2em;
  }

  .toggle + .toggle-button:after {
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    background: #6ed4bc;
    content: '';
    border-radius: 1em;
  }
`;
