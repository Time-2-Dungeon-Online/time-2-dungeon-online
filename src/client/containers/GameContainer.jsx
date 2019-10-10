import React from 'react';
import PlayerContainer from './PlayerContainer.jsx';
import DungeonContainer from './DungeonContainer.jsx';

const GameContainer = () => {
  return (
    <div id="game-container">
      It's time to play hahaha
      <PlayerContainer />
      <DungeonContainer />
    </div>
  )
}

export default GameContainer;