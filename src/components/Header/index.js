import React from 'react';

import Logo from '../../objects/Logo';
import Menu from '../../objects/Menu';
import Sobre from '../../objects/Sobre';

import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <Logo image="dark"/>
      <Sobre color="dark"/>
      <Menu />
    </header>
    
  );
}

export default Header;