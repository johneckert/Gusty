import { GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from './actionTypes';
import WeatherData from '../services/weatherDataAPI';

export const getWeatherFor = city_name => {
  return function(dispatch) {
    WeatherData.getWeather(city_name).then(json => {
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
        return { type: GET_WEATHER_SUCCESS, payload: cityData };
      } else {
        return { type: GET_WEATHER_FAIL };
      }
    });
  };
};
