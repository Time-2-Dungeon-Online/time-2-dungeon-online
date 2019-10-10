import React from 'react';
import Player from '../components/Player.jsx';
import PlayerCard from '../components/PlayerCard.jsx';

const PlayerContainer = (props) => {
  const { id } = props;
  return (
    <div className="player-container">
      <Player id={id} />
      <PlayerCard />
    </div>
  )
}

export default PlayerContainer;