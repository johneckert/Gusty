import React from 'react';
import { connect } from 'react-redux';

const currentWeather = props => {
  return (
    <div>
      <ul>
        <li>Name: {props.weatherObj.name}</li>
        <li>Temp: {props.weatherObj.temp}</li>
        <li>Icon: {props.weatherObj.icon}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { weatherObj: state.relevantWeatherObj };
};

export default connect(mapStateToProps)(currentWeather);
