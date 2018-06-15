import initialState from './initialState';
import {
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAIL,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
  SET_CURRENT_CITY
} from '../actions/actionTypes';

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return { ...state, weatherObjs: [...state.weatherObjs, action.payload] };
    case GET_WEATHER_FAIL:
      return { ...state, weatherObjs: [...state.weatherObjs, action.payload] };
    case GET_FORECAST_SUCCESS:
      return { ...state, forecastObj: action.payload };
    case GET_FORECAST_FAIL:
      return { ...state, forecastObj: action.payload };
    case CURRENT_WEATHER_SUCCESS:
      return { ...state, relevantWeatherObj: action.payload };
    case CURRENT_WEATHER_FAIL:
      return { ...state, relevantWeatherObj: action.payload };
    case SET_CURRENT_CITY:
      return { ...state, currentCity: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
