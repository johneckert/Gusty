import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAIL,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
  SET_CURRENT_CITY
} from './actionTypes';
import {
  buildCurrentWeather,
  buildForecastObj,
  currentError,
  forecastError
} from './actionHelpers';
import WeatherData from '../services/weatherDataAPI';
import ForecastData from '../services/forecastDataAPI';

export const getWeatherFor = cityName => {
  return function(dispatch) {
    WeatherData.getWeather(cityName).then(json => {
      if (json.cod === 200) {
        const cityData = buildCurrentWeather(json);
        dispatch({ type: GET_WEATHER_SUCCESS, payload: cityData });
      } else {
        dispatch({ type: GET_WEATHER_FAIL, payload: currentError });
      }
    });
  };
};

export const getSingleWeatherFor = cityName => {
  return function(dispatch) {
    WeatherData.getWeather(cityName).then(json => {
      if (json.cod === 200) {
        const cityData = buildCurrentWeather(json);
        dispatch({ type: CURRENT_WEATHER_SUCCESS, payload: cityData });
      } else {
        dispatch({ type: CURRENT_WEATHER_FAIL, payload: currentError });
      }
    });
  };
};

export const setCurrentCity = currentCity => {
  return { type: SET_CURRENT_CITY, payload: currentCity };
};

export const getForecastFor = cityName => {
  return function(dispatch) {
    ForecastData.getForecast(cityName).then(json => {
      if (json.cod === '200') {
        const forecastObj = buildForecastObj(json);
        dispatch({ type: GET_FORECAST_SUCCESS, payload: forecastObj });
      } else {
        dispatch({ type: GET_FORECAST_FAIL, payload: forecastError });
      }
    });
  };
};
