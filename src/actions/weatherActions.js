import {
  GET_WEATHER_OBJECTS,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  FIND_RELEVANT_WEATHER_OBJECT
} from './actionTypes';
import WeatherData from '../services/weatherDataAPI';

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

export const selectCity = relevantObj => {
  return { type: FIND_RELEVANT_WEATHER_OBJECT, payload: relevantObj };
};
