import React from 'react';

import Logo from '../../objects/Logo';
import Menu from '../../objects/Menu';
import Sobre from '../../objects/Sobre';

import './styles.css';

const Header = ({type = "light"}) => {
  if (type === "light") {
    return (
      <header className="header">
        <Logo image="dark"/>
        <Sobre color="dark"/>
        <Menu type="close"/>
      </header>
      
    );
  }
  if (type === "dark") {
    return (
      <header className="header">
        <Logo image="light"/>
        <Sobre color="light"/>
        <Menu type="close"/>
      </header>
      
    );
  }
  
}

export default Header;