import React, { useContext } from 'react';
import { Link } from 'gatsby';
import useHomeMenu from '../hooks/useHomeMenu';
import { ThemeContext } from './ThemeWrapper';

import { StyledPageMenu } from './styles/StyledPageMenu';

const PageMenu = () => {
  const menu = useHomeMenu();
  const [nightMode] = useContext(ThemeContext);

  return (
    <StyledPageMenu nightMode={nightMode}>
      <ul id="cinemanord-ul">
        {menu.items.map(item => (
          <li key={item.wordpress_id}>
            <Link
              data-hover={item.title}
              to={item.url}
              activeClassName="active-menu"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledPageMenu>
  );
};

export default PageMenu;
