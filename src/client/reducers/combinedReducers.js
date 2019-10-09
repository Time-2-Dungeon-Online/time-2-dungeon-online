
import { combineReducers } from 'redux';

import PlayerReducer from './playerReducer';
import DungeonReducer from './dungeonReducer';
import GameStateReducer from './gameStateReducer';

const reducers = combineReducers({
  PlayerReducer,
  DungeonReducer,
  GameStateReducer,
});

export default reducers;