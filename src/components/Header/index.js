import React from 'react';

import LogoCollab from '../../objects/LogoCollab';
import Menu from '../../objects/Menu';
import AboutLink from '../../objects/AboutLink';

import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <LogoCollab />
      <AboutLink />
      <Menu />
    </header>
    
  );
}

export default Header;