import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PlayerContainer from './PlayerContainer.jsx';
import DungeonContainer from './DungeonContainer.jsx';

const GameContainer = () => {
  // const currentUser = useSelector(state => state.uiReducer.userID);
  // const wsServer = useSelector(state => state.uiReducer.wsServer);
  // useEffect(() => {
  //   window.addEventListener('beforeunload', () => {
  //     wsServer.send(JSON.stringify({
  //       action: 'CLIENT_TO_SERVER_QUIT_GAME',
  //       payload: currentUser,
  //     }))
  //   })
  // })
  const allPlayers = useSelector(state => state.PlayerReducer.allPlayers);
  console.log(allPlayers);
  const players = [];
  Object.keys(allPlayers).forEach((player) => {
    console.log(allPlayers[player]);
    const { playerName, cardCount } = allPlayers[player];
    players.push(<PlayerContainer name={playerName} cardCount={cardCount} />);
  })

  return (
    <div id="game-container">
      <DungeonContainer />
      {players}
    </div>
  )
}

export default GameContainer;