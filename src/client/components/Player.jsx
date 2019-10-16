import React from 'react';

const Player = (props) => {
  const { name, cardCount } = props;
  return (
    <div id="player">
      <p>Player {name}</p>
      <p>HP: {cardCount}/40</p>
    </div>
  )
}

export default Player;