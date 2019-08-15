import React from 'react';
import './styles.css';

import Avatar from '../Avatar';
import Header from '../../components/Header';
import Main from '../Main';
import Footer from '../Footer';

const AboutPage = () => (
  <div className="about-page">
    <Header type="dark"/>
    <Avatar size="129px"/>
    <Main />
    <Footer />
  </div>
);

export default AboutPage;