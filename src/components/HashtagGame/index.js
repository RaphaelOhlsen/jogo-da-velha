import React from 'react';
import './styles.css';

import PlayerGame from '../../objects/PlayerGame'
import CardGame from '../../objects/CardGame';

const HashtagGame = () => (
  <CardGame>
    <ul className="hashtag-game">
      <li className="item"><PlayerGame /></li>
      <li className="item"><PlayerGame /></li>
      <li className="item"><PlayerGame /></li>

      <li className="item"><PlayerGame /></li>
      <li className="item"><PlayerGame /></li>
      <li className="item"><PlayerGame /></li>
 
      <li className="item"><PlayerGame /></li> 
      <li className="item"><PlayerGame /></li>
      <li className="item"><PlayerGame /></li>
    </ul>
  </CardGame>
);

export default HashtagGame;