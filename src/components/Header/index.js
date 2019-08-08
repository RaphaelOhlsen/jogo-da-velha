import React from 'react';

import Brand from '../../objects/Brand';
import Sobre from '../../objects/Sobre';
import Hamburguer from '../../objects/Hamburguer';

import './styles.css';

const Header = () => {
  return (
    <header className ="header">  
        <Brand />
        <div className = "wrap-right">
          <Sobre />
          <Hamburguer />
        </div>
    </header>
  )
}

export default Header;