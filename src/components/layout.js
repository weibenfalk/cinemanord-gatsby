import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import OverlayMenu from './OverlayMenu';
import Hamburger from './Hamburger';
import Social from './Social';

import { GlobalStyle } from './styles/StyledLayout';

import { ThemeContext } from './ThemeWrapper';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nightMode] = useContext(ThemeContext);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={nightMode ? 'bodyWrapper dark' : 'bodyWrapper'}>
      <Hamburger callback={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />

      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </div>
      <Social />
      <GlobalStyle nightMode={nightMode} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
