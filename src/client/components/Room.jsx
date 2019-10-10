import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinRoom } from '../actions/actions';

const Room = () => {
  const dispatch = useDispatch();
  const test = () => {
    dispatch(joinRoom());
  }
  return (
    <div id="room">
      <h3>Room #1</h3>
      <Link to="/main/game">
        <button onClick={() => {
          test();
        }}>Join</button>
      </Link>
    </div>
  )
}

export default Room;