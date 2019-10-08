
import { Provider } from 'react-redux';
import { Component } from 'react';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

      </Provider>
    )
  }
}

export default App;