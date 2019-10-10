import * as types from '../actions/actionTypes';

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
      // console.log(state);
      // state.wsServer.onopen = () => {
      //   console.log('am i even working')
        state.wsServer.send("HI")
      // };
      return state;

    default:
      return state;
  }
}

export default uiReducer;