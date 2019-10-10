import React from 'react';

const Player = (props) => {
  return (
    <div id="player">
      {props.name}
      Player 1
      HP: 40/40
    </div>
  )
}

export default Player;