import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect, send } from '@giantmachines/redux-websocket';
import RoomContainer from './RoomContainer.jsx';
import NavContainer from './NavContainer.jsx';
import GameContainer from './GameContainer.jsx';
import { Route } from "react-router-dom";
const socketTypes = require('../../../server/utils/actions');

const MainContainer = () => {
  const dispatch = useDispatch();
  // const test = useSelector(state => state.uiReducer.wsTest);
  const gameisFull = useSelector(state => state.gameStateReducer.gameisFull);
  console.log(gameisFull);
  useEffect(() => {
    dispatch(connect('ws://localhost:8000'));
  })
  return (
    <div id="main-container">
        <NavContainer />
        <Route exact path="/main">
          <RoomContainer />
        </Route>
        <Route path="/main/game">
          {gameisFull ? <p>Game is full</p> : <GameContainer />}
        </Route>
        {/* <button onClick={() => {
          dispatch(send({
            type: socketTypes.CLIENT_TO_SERVER_QUIT_GAME,
          }))
        }}>Test</button>
        {test} */}
    </div>
  )
}

export default MainContainer;