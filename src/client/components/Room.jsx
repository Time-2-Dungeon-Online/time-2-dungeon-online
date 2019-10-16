import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { joinRoom } from '../actions/actions';
import { send } from '@giantmachines/redux-websocket';
import * as socketTypes from '../../../server/utils/actions';

const Room = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.uiReducer.userID);
  const joinRoom = () => {
    dispatch(send({
      type: socketTypes.CLIENT_TO_SERVER_JOIN_GAME,
      payload: username,
    }));
  }
  return (
    <div id="room">
      <h3>Room #1</h3>
      <Link to="/main/game">
        <button onClick={() => {
          joinRoom();
        }}>Join</button>
      </Link>
    </div>
  )
}

export default Room;