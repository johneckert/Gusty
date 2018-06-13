import React from 'react';
import { connect } from 'react-redux';

const currentWeather = props => {
  return (
    <div>
      <h3>Current Weather</h3>
      <ul>
        <li>Temp: {props.weatherObj.temp}</li>
        <li>Low: {props.weatherObj.temp_min}</li>
        <li>High: {props.weatherObj.temp_max}</li>
        <li>Pressure: {props.weatherObj.pressure}</li>
        <li>Humidity: {props.weatherObj.humidity}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { weatherObj: state.relevantWeatherObj };
};

export default connect(mapStateToProps)(currentWeather);
