import React from 'react';
import LoginContainer from './LoginContainer.jsx';
import MainContainer from './MainContainer.jsx';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const AppContainer = () => {
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
    </div>
  )
}

export default AppContainer;