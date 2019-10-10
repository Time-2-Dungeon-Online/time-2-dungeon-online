import React from 'react';
import Player from '../components/Player.jsx';
import PlayerCard from '../components/PlayerCard.jsx';

const PlayerContainer = () => {
  return (
    <div id="player-container">
      <Player />
      <PlayerCard />
    </div>
  )
}

export default PlayerContainer;