import React, { useEffect } from 'react';
import LoginContainer from './LoginContainer.jsx';
import MainContainer from './MainContainer.jsx';
import { addPlayer, setRoomToUnavailable } from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from "react-router-dom";
const socketTypes = require('../../../server/utils/actions');

const AppContainer = () => {
  const wsServer = useSelector(state => state.uiReducer.wsServer);
  const dispatch = useDispatch();
  useEffect(() => {
    // Receiving messages from server
    wsServer.onmessage = (msg) => {
      console.log('incoming msg:', msg.data);
      const { action, payload } = JSON.parse(msg.data);
      switch (action) {
        case socketTypes.SERVER_TO_CLIENT_JOIN_GAME:
          console.log('received:', payload);
          dispatch(addPlayer(payload));
          break;
        case socketTypes.SERVER_TO_CLIENT_CANT_JOIN:
          console.log('Cant join');
          dispatch(setRoomToUnavailable());
        default:
          break;
      }
    };
  })
  const isSignedIn = useSelector(state => {
    console.log(state);
    return state.uiReducer.isSignedIn;
  });
  console.log(isSignedIn);
  return (
    <div id="App-Container">
        {isSignedIn ? <Redirect to="/main" /> : <LoginContainer />}
        <Route path="/main">
          <MainContainer />
        </Route>
        <button onClick={() => {
          wsServer.send(JSON.stringify({
            action: 'hey',
          }));
      }}>Test</button>
    </div>
  )
}

export default AppContainer;