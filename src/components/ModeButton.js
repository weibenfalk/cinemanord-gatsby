/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeWrapper';

import { StyledModeButton } from './styles/StyledModeButton';

const ModeButton = () => {
  const [nightMode, setNightMode] = useContext(ThemeContext);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <StyledModeButton>
      <p>Dark/Light</p>
      <div className="button-con">
        <input
          className="toggle"
          id="cb1"
          type="checkbox"
          onClick={toggleNightMode}
          checked={!nightMode}
        />
        <label className="toggle-button" htmlFor="cb1" />
      </div>
    </StyledModeButton>
  );
};

export default ModeButton;
