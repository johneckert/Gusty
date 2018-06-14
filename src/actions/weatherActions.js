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
          wind: `${direction(json.wind.deg)} ${Math.round(json.wind.speed)}`,
          icon: parseIcon(json.weather[0].icon),
          description: json.weather[0].description,
          temp: Math.round(json.main.temp),
          pressure: Math.round(json.main.pressure / 33.863886666667), //convert hpa => inhg
          humidity: Math.round(json.main.humidity)
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
          wind: `${direction(json.wind.deg)} ${Math.round(json.wind.speed)}`,
          icon: parseIcon(json.weather[0].icon),
          description: json.weather[0].description,
          temp: Math.round(json.main.temp),
          pressure: Math.round(json.main.pressure / 33.863886666667), //convert hpa => inhg
          humidity: Math.round(json.main.humidity)
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
  console.log('hit action!');
  return function(dispatch) {
    ForecastData.getForecast(cityName).then(json => {
      //PARSE FORECAST
      dispatch({ type: GET_FORECAST_SUCCESS, payload: json });
    });
  };
};

//Calculate Wind Direction from degrees
const direction = w => {
  if (w >= 349 || w < 11) {
    return 'N';
  } else if (w >= 11 && w < 34) {
    return 'NNE';
  } else if (w >= 34 && w < 56) {
    return 'NE';
  } else if (w >= 56 && w < 79) {
    return 'ENE';
  } else if (w >= 79 && w < 101) {
    return 'E';
  } else if (w >= 101 && w < 124) {
    return 'ESE';
  } else if (w >= 124 && w < 146) {
    return 'SE';
  } else if (w >= 146 && w < 169) {
    return 'SSE';
  } else if (w >= 169 && w < 191) {
    return 'S';
  } else if (w >= 191 && w < 214) {
    return 'SSW';
  } else if (w >= 214 && w < 236) {
    return 'SW';
  } else if (w >= 236 && w < 259) {
    return 'WSW';
  } else if (w >= 259 && w < 281) {
    return 'W';
  } else if (w >= 281 && w < 304) {
    return 'WNW';
  } else if (w >= 304 && w < 326) {
    return 'NW';
  } else if (w >= 326 && w < 349) {
    return 'NNW';
  } else {
    return '--';
  }
};

const parseIcon = icon => {
  switch (icon) {
    case '01d':
      return 'sun';
    case '01n':
      return 'moon';
    case '02d':
      return 'partSun';
    case '02n':
      return 'partMoon';
    case '03d':
      return 'cloud';
    case '03n':
      return 'cloud';
    case '04d':
      return 'cloud';
    case '04n':
      return 'cloud';
    case '09d':
      return 'rain';
    case '09n':
      return 'rain';
    case '10d':
      return 'heavyRain';
    case '10n':
      return 'heavyRain';
    case '11d':
      return 'thunderstorm';
    case '11n':
      return 'thunderstorm';
    case '13d':
      return 'snow';
    case '13n':
      return 'snow';
    case '50d':
      return 'mist';
    case '50n':
      return 'mist';

    default:
      return;
  }
};
