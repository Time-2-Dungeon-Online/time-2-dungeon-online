
import reducers from './reducers/combinedReducers';
// import reducer from './reducers/dungeonReducer';
import { createStore } from 'redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;