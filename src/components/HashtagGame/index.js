import React, { useState } from 'react';
import './styles.css';

import PlayerGame from '../../objects/PlayerGame'
import CardGame from '../../objects/CardGame';

const HashtagGame = () => {

  const [ xIsNext, setXIsNext] = useState(true);

  const [squares, setSquares] = useState(Array(9).fill(null));


  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    squaresCopy[i] = xIsNext ? 'x' : 'o';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  }

  const renderSquare = (i) => {
    return (
      <PlayerGame
        value = {squares[i]} 
        onClick = {() => handleClick(i)}
      />
    );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const winner = calculateWinner(squares);
  console.log(winner);

  return (
    <CardGame>
      <ul className="hashtag-game">
        <li className="item">{renderSquare(0)}</li>
        <li className="item">{renderSquare(1)}</li>
        <li className="item">{renderSquare(2)}</li>

        <li className="item">{renderSquare(3)}</li>
        <li className="item">{renderSquare(4)}</li>
        <li className="item">{renderSquare(5)}</li>
  
        <li className="item">{renderSquare(6)}</li> 
        <li className="item">{renderSquare(7)}</li>
        <li className="item">{renderSquare(8)}</li>
      </ul>
    </CardGame>
  );  
};

export default HashtagGame;