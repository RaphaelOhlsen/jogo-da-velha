import React from 'react';
import './styles.css';

import LogoCollab from '../../objects/LogoCollab';
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';

const InternalHeader = () => (
  <header className="internal-header">
    <LogoCollab light />
    <AboutLink className="-light"/>
    <IconClose />
  </header>
);

export default InternalHeader;