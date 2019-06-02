import React from 'react';
import { Link } from 'gatsby';
import useHomeMenu from '../hooks/useHomeMenu';

import { StyledOverlay } from './styles/StyledOverlayMenu';

import cnLogo from '../images/cn_logo.png';
import CloseButton from '../images/x.png';

const OverlayMenu = ({ menuOpen, callback }) => {
  const menu = useHomeMenu();

  return (
    <StyledOverlay menuOpen={menuOpen}>
      <div className="inner">
        <Link to="/">
          <img className="whiteLogo" src={cnLogo} alt="cinemanord-logo" />
        </Link>
        <ul className="overlayMenu">
          {menu.items.map(item => (
            <li key={item.wordpress_id}>
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
          <img src={CloseButton} alt="cinemanord-close-button" />
        </div>
      </div>
    </StyledOverlay>
  );
};

export default OverlayMenu;
