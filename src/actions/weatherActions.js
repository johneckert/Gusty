import {
  GET_WEATHER_OBJECTS,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAIL,
  CURRENT_WEATHER_SUCCESS,
  FIND_RELEVANT_WEATHER_OBJECT,
  SET_CURRENT_CITY
} from './actionTypes';
import WeatherData from '../services/weatherDataAPI';
import ForecastData from '../services/forecastDataAPI';

export const getWeatherFor = cityName => {
  return function(dispatch) {
    WeatherData.getWeather(cityName).then(json => {
      if (json.cod === 200) {
        //build city data
        const cityData = {
          id: json.id,
          name: json.name,
          time: json.dt,
          weather: json.weather,
          temp: json.main.temp,
          low: json.main.temp_min,
          high: json.main.temp_max,
          pressure: json.main.pressure,
          humidity: json.main.humidity
        };
        dispatch({ type: GET_WEATHER_SUCCESS, payload: cityData });
      } else {
        dispatch({ type: GET_WEATHER_FAIL });
      }
    });
  };
};

export const getSingleWeatherFor = cityName => {
  return function(dispatch) {
    WeatherData.getWeather(cityName).then(json => {
      if (json.cod === 200) {
        //build city data
        const cityData = {
          id: json.id,
          name: json.name,
          time: json.dt,
          weather: json.weather,
          temp: json.main.temp,
          low: json.main.temp_min,
          high: json.main.temp_max,
          pressure: json.main.pressure,
          humidity: json.main.humidity
        };
        dispatch({ type: CURRENT_WEATHER_SUCCESS, payload: cityData });
      } else {
        dispatch({ type: GET_WEATHER_FAIL });
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
      if (json.cod === 200) {
        //build forecast data
        const cityForecastData = json;
        dispatch({ type: GET_FORECAST_SUCCESS, payload: cityForecastData });
      } else {
        dispatch({ type: GET_FORECAST_FAIL });
      }
    });
  };
};
//
// export const selectCity = relevantObj => {
//   return { type: FIND_RELEVANT_WEATHER_OBJECT, payload: relevantObj };
// };
