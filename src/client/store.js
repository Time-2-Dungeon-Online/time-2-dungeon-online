
import reducers from './reducers/combinedReducers';
import { createStore } from 'redux';

const store = createStore({
  reducers,
});

export default store;