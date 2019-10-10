import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinRoom } from '../actions/actions';

const Room = () => {
  const dispatch = useDispatch();
  // const wsServer = useSelector(state => state.uiReducer.wsServer)
  // const wsServer = new WebSocket('ws://localhost:8000');
  // console.log(wsServer);
  const test = () => {
    dispatch(joinRoom());
    // wsServer.send("HI")
    // wsServer.addEventListener('open', (event) => {
    //   console.log('am i even working')
    //   wsServer.send("HI")
    // });
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