import React from 'react';
import Collabcode from '../../img/logo.png';
import CollabcodeLight from '../../img/logo-light.png';

const LogoCollab = ({light = false }) => (
  <img className="logo-collab" 
    src={light ? CollabcodeLight : Collabcode} 
    alt="Logo da Collabcode" 
  />
);

export default LogoCollab;
