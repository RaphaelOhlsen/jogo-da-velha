import React from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';
import About from './objects/About';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import InternalHeader from './components/InternalHeader';


const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar eventos" />
    <About>
      <InternalHeader />
    </About>
  </main>
);

export default App;
