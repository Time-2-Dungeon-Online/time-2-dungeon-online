import React, { useEffect } from 'react';
import { send } from '@giantmachines/redux-websocket';
import { useSelector, useDispatch } from 'react-redux';
import PlayerContainer from './PlayerContainer.jsx';
import DungeonContainer from './DungeonContainer.jsx';
import ClientPlayer from '../components/ClientPlayer.jsx';
import { startGame } from '../actions/actions'

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
  const { allPlayers, gameStarted } = useSelector(state => state.gameStateReducer);
  const dispatch = useDispatch();
  const players = [];
  Object.keys(allPlayers).forEach((player) => {
    console.log(allPlayers[player]);
    const { playerName, cardCount } = allPlayers[player];
    players.push(<PlayerContainer name={playerName} cardCount={cardCount} />);
  })

  const startGameButtonClick = () => {
    dispatch(send(startGame()));
  }

  return (
    <div id="game-container">
      {players}
      {gameStarted ? <><DungeonContainer /> <ClientPlayer /></> : <button onClick={() => {
        startGameButtonClick();
      }}>Start Game</button>}
    </div>
  )
}

export default GameContainer;