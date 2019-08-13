import React from 'react';
import './App.css';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Display from './components/Display';

const App = () => (
    <main className="app">
      <Header />
      <Hashtag />
      <Display />
    </main>
);

export default App;
