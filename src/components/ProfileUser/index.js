import React from 'react';
import './styles.css';

import Profile from '../../img/avatar.png';
import GitHub from '../../img/github-icon.png'
import Facebook from '../../img/facebook-icon.png'
import Instagram from '../../img/instagram-icon.png'
import Twitter from '../../img/twitter-icon.png'
import Linkedin from '../../img/linkedin-icon.png'

import AvatarProfile from '../../objects/AvatarProfile';
import IconSocial from '../../objects/IconSocial';

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className = "avatar">
      <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
    </dd>
    <dt className="title">Marco Bruno</dt>
    <dd className="description">
      Migrei de palhaço para Dev. Front-End/UX e agora trbalho com streamer de código. Instrutor e dev na Collabcode.
    </dd>
    <dd className="socials">
      
      <IconSocial 
        action="HTTP://github.com.com" 
        alt="Logo da GitHub" 
        src={GitHub} 
      />
      <IconSocial 
        action="HTTP://facebook.com" 
        alt="Logo da Facebook" 
        src={Facebook} 
      />
      <IconSocial 
        action="HTTP://twitter.com" 
        alt="Logo da Twitter" 
        src={Twitter} 
      />
      <IconSocial 
        action="HTTP://instagram.com" 
        alt="Logo da Instagram" 
        src={Instagram} 
      />
      <IconSocial 
        action="HTTP://linkedin.com" 
        alt="Logo da Linkedin" 
        src={Linkedin} 
      />
    </dd>
  </dl>
);

export default ProfileUser;