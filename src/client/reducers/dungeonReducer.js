
import * as types from "../actions/actionTypes";

const initialState = {
  dungeonDeck: [],
  currentEnemy: null,
  bossStatus: true,
}

const dungeonReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.RANDOMIZE_DUNGEON_DECK:

    case types.SET_NEW_ENEMY:

    case types.COMPARE_CARD_AGAINST_ENEMY:

    case types.BOSS_DEAD:

    default:
      return {
        ...state,
      }
  }
}

export default dungeonReducer;