import React from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';
import AboutPage from './objects/AboutPage';

import Header from './components/Header';
import Hashtag from './components/Hashtag';



const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar eventos" />
    {/* <AboutPage /> */}
  </main>
);

export default App;
