import React from 'react';
import RoomContainer from './RoomContainer.jsx';
import NavContainer from './NavContainer.jsx';
import GameContainer from './GameContainer.jsx';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const MainContainer = () => {
  return (
    <div id="main-container">
        <NavContainer />
        <Route exact path="/main">
          <RoomContainer />
        </Route>
        <Route path="/main/game">
          <GameContainer />
        </Route>
    </div>
  )
}

export default MainContainer;