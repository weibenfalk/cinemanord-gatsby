import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from './ThemeWrapper';

import PageMenu from './PageMenu';

import cnLogo from '../images/cn-logo.png';
import cnLogoBlack from '../images/cn-logo-black.png';

import { StyledHeader } from './styles/StyledHeader';

const Header = () => {
  const [nightMode] = useContext(ThemeContext);

  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col">
          <StyledHeader>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <img src={nightMode ? cnLogo : cnLogoBlack} alt="cnLogo" />
              </Link>
            </h1>
            <PageMenu />
          </StyledHeader>
        </div>
      </div>
    </header>
  );
};

export default Header;
