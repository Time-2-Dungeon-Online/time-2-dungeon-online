import * as types from '../actions/actionTypes';

const initialState = {
  userID: Math.ceil(Math.random()*90),
  isSignedIn: false,
}

const uiReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type) { 
    case types.SIGN_IN:
      newState.isSignedIn = true;
      return newState;
    default:
      return state;
  }
}

export default uiReducer;