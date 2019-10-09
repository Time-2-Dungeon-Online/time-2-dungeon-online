import React, { useState } from 'react';

const App = (props) => {
  const [wssOpen, changeStatus] = useState(false);
  const wss = new WebSocket('ws://localhost:8000');
  wss.addEventListener('open', () => {
    changeStatus(true);
  })
  const buttonClick = () => {
    if (wssOpen) {
      wss.send('Clicked!')
    }
  };
  return (
    <div>
      <p>Heyyyy</p>
      <button onClick={() => {
        buttonClick();
      }}>Send a WS message</button>
    </div>
  )
}

export default App;