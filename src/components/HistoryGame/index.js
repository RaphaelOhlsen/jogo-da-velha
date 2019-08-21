import React from "react";
import './styles.css';

import TagGame from "../../objects/TagGame";

const HistoryGame = ({ player }) => {

  return (
    <ol className="history-game">
      <li className="action">
        <TagGame content={`Adicionou ${player.toUpperCase()}`} />
      </li>   
    </ol>
  );
}

export default HistoryGame;