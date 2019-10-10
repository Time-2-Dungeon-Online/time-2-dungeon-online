
import { combineReducers } from 'redux';

import PlayerReducer from './playerReducer';
import DungeonReducer from './dungeonReducer';
// import GameStateReducer from './gameStateReducer';
import uiReducer from './uiReducer';

const reducers = combineReducers({
  PlayerReducer,
  DungeonReducer,
  uiReducer,
  // GameStateReducer,
});

export default reducers;