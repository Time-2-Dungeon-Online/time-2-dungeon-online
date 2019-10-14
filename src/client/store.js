
import reducers from './reducers/combinedReducers';
// import reducer from './reducers/dungeonReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxWebsocket from '@giantmachines/redux-websocket';

const reduxWebSocketMiddleware = reduxWebsocket();
const store = createStore(reducers, applyMiddleware(reduxWebSocketMiddleware));

export default store;