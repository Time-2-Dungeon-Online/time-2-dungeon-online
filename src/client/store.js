
import reducers from './reducers/combinedReducers';
// import reducer from './reducers/dungeonReducer';
import { createStore } from 'redux';

const store = createStore(reducers);

export default store;