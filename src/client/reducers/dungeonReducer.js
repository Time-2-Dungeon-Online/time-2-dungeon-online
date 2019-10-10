
import * as types from "../actions/actionTypes";

const initialState = {
  dungeonDeck: [],
  currentEnemy: null,
  bossStatus: true,
}

const dungeonReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default dungeonReducer;