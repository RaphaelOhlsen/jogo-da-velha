import React from 'react';
import Avatar from '../../img/avatar.png'
import './styles.css';

const Logo = ({size}) => {
  return (<img className="avatar" src={Avatar} width={size} alt="Logo da Collabcode" />);
} 

export default Logo;
