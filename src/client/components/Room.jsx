import React from 'react';
import { Link } from 'react-router-dom';

const Room = () => {
  return (
    <div id="room">
      <h3>Room #1</h3>
      <Link to="/main/game">
        <button>Join</button>
      </Link>
    </div>
  )
}

export default Room;