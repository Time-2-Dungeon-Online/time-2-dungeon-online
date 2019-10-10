import * as types from '../actions/actionTypes';

const initialState = {
  isSignedIn: false,
}

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SIGN_IN:
      const newState = Object.assign({}, state);
      newState.isSignedIn = true;
      return newState;
    default:
      return state;
  }
}

export default uiReducer;