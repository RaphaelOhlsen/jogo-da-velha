import React from 'react';
import Github from '../../img/github-icon.png';
import Instagram from '../../img/instagram-icon.png';
import Facebook from '../../img/facebook-icon.png';
import Twitter from '../../img/twitter-icon.png';
import Linkedin from '../../img/linkedin-icon.png';

const Icon = ({content}) => {
  const icons = {
    github: Github,
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin
  }

  return (
    <img src={icons[content]} alt= {`Icone do ${content}`} />
  )
}

export default Icon;


