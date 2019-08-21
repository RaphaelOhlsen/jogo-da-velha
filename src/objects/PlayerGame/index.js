import React, { useState } from 'react';
import './styles.css';
import playerX from '../../img/player-x.png'
import playerO from '../../img/player-o.png'
let actualPlayer = "x";

const PlayerGame = ({player = false}) => {
  const [statePlayer, setStatePlayer] = useState(player);

  const players = {
    x: playerX,
    o: playerO
  };

  const handleClick = () => {
    if (!statePlayer && actualPlayer === "x" ) {
      setStatePlayer("x");
      actualPlayer = "o";
    } else if (!statePlayer && actualPlayer === "o") {
      setStatePlayer("o");
      actualPlayer = "x";
    }
  };

   return (
    <button onClick={handleClick} className="player-game">
      {statePlayer && 
        <img 
          src={players[statePlayer]} 
          alt={`Jogador ${statePlayer.toUpperCase()}`}
        />
      }
    </button>
  );
}
export default PlayerGame;