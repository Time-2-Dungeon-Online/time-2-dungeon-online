import React from 'react';

const Player = (props) => {
  return (
    <div id="player">
      Player {props.playerName}
      HP: 40/40
    </div>
  )
}

export default Player;