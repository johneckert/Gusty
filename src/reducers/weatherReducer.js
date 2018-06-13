import initialState from './initialState';
import {
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_OBJECTS,
  GET_FORECAST_FAIL,
  GET_FORECAST_SUCCESS,
  CURRENT_WEATHER_SUCCESS,
  FIND_RELEVANT_WEATHER_OBJECT,
  SET_CURRENT_CITY
} from '../actions/actionTypes';

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return { ...state, weatherObjs: [...state.weatherObjs, action.payload] };
    case GET_WEATHER_FAIL:
      return { ...state, error: 'Weather Data Unavailable' };
    case GET_FORECAST_SUCCESS:
      return { ...state, forecastObj: action.payload };
    case GET_FORECAST_FAIL:
      return { ...state, error: 'Forecast Data Unavailable' };
    case CURRENT_WEATHER_SUCCESS:
      return { ...state, relevantWeatherObj: action.payload };
    case GET_WEATHER_OBJECTS:
      return { ...state, weatherObjs: state.weatherObjs };
    case SET_CURRENT_CITY:
      return { ...state, currentCity: action.payload };
    case FIND_RELEVANT_WEATHER_OBJECT:
      return { ...state, relevantWeatherObj: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
