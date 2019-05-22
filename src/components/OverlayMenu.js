import React from 'react';
import { Link } from 'gatsby';
import useHomeMenu from '../hooks/useHomeMenu';

// import WhiteLogo from '../images/tango_logo_white.svg';
// import CloseButton from '../images/tango_close_button.svg';

import { StyledOverlay } from './styles/StyledOverlayMenu';

const OverlayMenu = ({ menuOpen, callback }) => {
  const menu = useHomeMenu();

  return (
    <StyledOverlay menuOpen={menuOpen}>
      <div className="inner">
        {/* <img className="whiteLogo" src={WhiteLogo} alt="tango-white-logo" /> */}
        <ul className="overlayMenu">
          {menu.items.map((item, i) => (
            <li key={i}>
              <Link to={item.url} activeClassName="overlayActive">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          Close
          {/* <img src={CloseButton} alt="tango-close-button" /> */}
        </div>
      </div>
    </StyledOverlay>
  );
};

export default OverlayMenu;
