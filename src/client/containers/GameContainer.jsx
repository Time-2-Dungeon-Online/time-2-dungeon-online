import React from 'react';
import { useSelector } from 'react-redux';
import PlayerContainer from './PlayerContainer.jsx';
import DungeonContainer from './DungeonContainer.jsx';

const GameContainer = () => {
  const numofPlayers = useSelector(state => state.PlayerReducer.playerCount);
  console.log(numofPlayers);
  return (
    <div id="game-container">
      It's time to play hahaha
      <PlayerContainer />
      <DungeonContainer />
    </div>
  )
}

export default GameContainer;