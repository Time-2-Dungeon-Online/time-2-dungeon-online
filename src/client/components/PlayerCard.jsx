import React from 'react';

const PlayerCard = (props) => {
  console.log(props);
  return (
    <div id="player-card" onClick={props.onClick}>
      Card Type: {props.props['card'].cardType}
    </div>
  )
}

export default PlayerCard;