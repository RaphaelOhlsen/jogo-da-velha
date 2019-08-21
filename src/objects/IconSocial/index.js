import React from 'react';

const IconSocial = ({src , alt, action}) => (
  <a target="_blank" href={action} rel="noopener noreferrer">
    <img src={src} alt={alt} className="icon-social"/>
  </a>
);

export default IconSocial;