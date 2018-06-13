import { createStore, applyMiddleware } from 'redux';
import weatherReducer from '../reducers/weatherReducer';
import thunk from 'redux-thunk';

const store = createStore(
  weatherReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
