import React from 'react';
import { useSelector } from 'react-redux';
import PlayerContainer from './PlayerContainer.jsx';
import DungeonContainer from './DungeonContainer.jsx';

const GameContainer = () => {
  const allPlayers = useSelector(state => state.PlayerReducer.allPlayers);
  const playerCount = Object.keys(allPlayers).length;
  const players = [];
  for (let i = 1; i <= playerCount; i += 1) {
    players.push(<PlayerContainer key={`Player${i}`} id={i} />);
  }
  return (
    <div id="game-container">
      It's time to play hahaha
      <DungeonContainer />
      {players}
    </div>
  )
}

export default GameContainer;