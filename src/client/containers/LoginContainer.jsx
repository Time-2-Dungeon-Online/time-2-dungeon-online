import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/actions';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const signInUponClick = () => {
    dispatch(signIn());
  }
  return (
    <div id="login-container">
      <div id="title">
        <h1>Time 2 Dungeon</h1>
      </div>
      <button onClick={() => {
        signInUponClick();
      }}>Log In</button>
    </div>
  )
}

export default LoginContainer;