import initialState from './initialState';
import { GET_WEATHER_FAIL, GET_WEATHER_SUCCESS, GET_WEATHER_OBJECTS } from '../actions/actionTypes';

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return { ...state, weatherObjs: [...state.weatherObjs, action.payload] };
    case GET_WEATHER_FAIL:
      return { ...state, error: 'Weather Data Unavailable' };
    case GET_WEATHER_OBJECTS:
      return { ...state, weatherObjs: state.weatherObjs };
    default:
      return state;
  }
};

export default weatherReducer;
