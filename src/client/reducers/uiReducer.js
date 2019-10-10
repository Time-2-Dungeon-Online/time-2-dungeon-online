import * as types from '../actions/actionTypes';
import * as socketTypes from '../../../server/utils/actions';

const wsServer = new WebSocket('ws://localhost:8000');
const initialState = {
  isSignedIn: false,
  wsServer,
}

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SIGN_IN:
      const newState = Object.assign({}, state);
      newState.isSignedIn = true;
      return newState;
    case types.JOIN_ROOM:
        state.wsServer.send(JSON.stringify({
          action: socketTypes.CLIENT_TO_SERVER_JOIN_GAME,
        }));
      return state;
    default:
      return state;
  }
}

export default uiReducer;