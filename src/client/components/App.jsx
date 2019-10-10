
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../store';
import React from 'react';
import AppContainer from '../containers/AppContainer.jsx';

const App = (props) => {
  // const [wssOpen, changeStatus] = useState(false);
  // const wss = new WebSocket('ws://localhost:8000');
  // wss.addEventListener('open', () => {
  //   changeStatus(true);
  // })
  // const buttonClick = () => {
  //   if (wssOpen) {
  //     wss.send('Clicked!')
  //   }
  // };
  return (
    <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>
  )
}

export default App;