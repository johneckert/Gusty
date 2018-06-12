import { combineReducers } from 'redux';
import cities from './citiesReducer';

const rootReducer = combineReducers({ cities });

export default rootReducer;
