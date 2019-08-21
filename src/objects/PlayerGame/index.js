import React from 'react';
import './styles.css';
import playerX from '../../img/player-x.png'
import playerO from '../../img/player-o.png'

const PlayerGame = ({ value, onClick}) => {
  const players = {
    x: playerX,
    o: playerO
  };

   return (
    <button onClick={onClick} className="player-game">
      {value && 
        <img 
          src={players[value]} 
          alt={`Jogador ${value.toUpperCase()}`}
        />
      }
    </button>
  );
}
export default PlayerGame;