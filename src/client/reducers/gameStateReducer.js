
import * as types from "../actions/actionTypes";

const initalState = {
  numPlayersInGame: 0,
  numDeadPlayersInGame: 0,
  gameStarted: false,
  gameFinished: false,
  didWin: null,
}

const gameStateReducer = (state=initalState, action) => {

};

export default gameStateReducer;