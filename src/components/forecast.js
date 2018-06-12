import React from 'react';
import ForecastData from '../services/forecastDataAPI';

const Forecast = () => {
  ForecastData.getForecast('London').then(json => console.log('forecast', json));
  return <h3>forecast</h3>;
};

export default Forecast;
