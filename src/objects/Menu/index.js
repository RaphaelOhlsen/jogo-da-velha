import React from 'react';
import './styles.css';

import HamburguerMenu from '../HamburguerMenu';
import CloseMenu from '../CloseMenu';

const Menu = ({type = 'hamburguer'}) => {
  if (type === 'hamburguer') return <HamburguerMenu />
  if (type === 'close') return <CloseMenu />
  
  return (
    <>
    </>
  );
}

export default Menu;