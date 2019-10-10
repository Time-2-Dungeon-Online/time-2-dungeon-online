import React from 'react';
import { useSelector } from 'react-redux';
import RoomContainer from './RoomContainer.jsx';
import NavContainer from './NavContainer.jsx';
import GameContainer from './GameContainer.jsx';
import { Route } from "react-router-dom";

const MainContainer = () => {
  const gameisFull = useSelector(state => state.PlayerReducer.gameisFull);
  console.log(gameisFull);
  return (
    <div id="main-container">
        <NavContainer />
        <Route exact path="/main">
          <RoomContainer />
        </Route>
        <Route path="/main/game">
          {gameisFull ? <p>Game is full</p> : <GameContainer />}
        </Route>
    </div>
  )
}

export default MainContainer;