import React, { useState } from 'react';
import './App.css';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';

import HeaderGame from './components/HeaderGame';
import HashtagGame from './components/HashtagGame';
import InternalHeader from './components/InternalHeader';
import ProfileUser from './components/ProfileUser';
import HistoryGame from './components/HistoryGame';

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
    
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox id="show" value="show" type="checkbox" content="Mostrar eventos" />
      <HistoryGame player="Raphael" />
      <LayerDark className={activeAbout}>
        <InternalHeader onClick={handleClickRemove}/>
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
