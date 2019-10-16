import React from 'react';
import Player from '../components/Player.jsx';
import PlayerCard from '../components/PlayerCard.jsx';

const PlayerContainer = (props) => {
  const { name, cardCount } = props;
  return (
    <div className="player-container">
      <Player name={name} cardCount={cardCount} />
    </div>
  )
}

export default PlayerContainer;