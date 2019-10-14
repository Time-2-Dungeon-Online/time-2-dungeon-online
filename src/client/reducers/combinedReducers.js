
import { combineReducers } from 'redux';

import gameStateReducer from './gameStateReducer';
import dungeonReducer from './dungeonReducer';
import playerReducer from './playerReducer';
import uiReducer from './uiReducer';

const reducers = combineReducers({
  gameStateReducer,
  dungeonReducer,
  uiReducer,
  playerReducer,
});

export default reducers;