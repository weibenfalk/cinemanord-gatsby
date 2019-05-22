import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import OverlayMenu from './OverlayMenu';
import Hamburger from './Hamburger';

import { GlobalStyle } from './styles/StyledLayout';
import './layout.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Hamburger callback={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </div>
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
