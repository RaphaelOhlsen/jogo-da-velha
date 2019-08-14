import React from 'react';
import CollabcodeLight from '../../img/logo-dark.png'
import CollabcodeDark from '../../img/logo-light.png'

const Logo = ({image}) => {
  const logos = {
    light: CollabcodeLight,
    dark: CollabcodeDark
  }
  return (<img src={logos[image]} alt="Logo da Collabcode" />);
} 

export default Logo;


