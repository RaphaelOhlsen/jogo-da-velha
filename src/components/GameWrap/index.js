import React from 'react';

import ElementO from '../../objects/ElementO';
import ElementX from '../../objects/ElementX';

import './styles.css';

const GameWrap = () => {
  return (
    <div className="game-wrap">
      <div className="itens-game">
        <div class="item style-1"></div>
        <div class="item style-1"><ElementO /></div>
        <div class="item style-2"><ElementX /></div>
        <div class="item style-1"><ElementO /></div>
        <div class="item style-1"><ElementX /></div>
        <div class="item style-2"><ElementO /></div>
        <div class="item style-3"><ElementX /></div>
        <div class="item style-3"><ElementO /></div>
        <div class="item"><ElementX /></div>
      </div>
    </div>
    
    
  );
}

export default GameWrap;