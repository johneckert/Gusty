import React from 'react';
import WeatherData from '../services/weatherDataAPI';

const currentWeather = () => {
  WeatherData.getWeather('London').then(json => {
    console.log('current', json);
  });

  return (
    <div>
      <h3>current weather</h3>
    </div>
  );
};

export default currentWeather;
