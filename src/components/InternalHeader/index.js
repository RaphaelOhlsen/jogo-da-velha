import React from 'react';
import './styles.css';

import LogoCollab from '../../objects/LogoCollab';
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';

const InternalHeader = ({onClick}) => (
  <header className="internal-header">
    <LogoCollab light />
    <AboutLink className="-light" onClick={onClick} />
    <IconClose onClick={onClick} />
  </header>
);

export default InternalHeader;