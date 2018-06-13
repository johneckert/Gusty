import React from 'react';
import { connect } from 'react-redux';

const Details = props => {
  return (
    <div>
      <h3>Details</h3>
      <ul>
        <li>Local Time: {props.weatherObj.time}</li>
        <li>Wind: {props.weatherObj.wind} mph</li>
        <li>Humidity: {props.weatherObj.humidity} %</li>
        <li>Pressure: {props.weatherObj.pressure} mHg</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { weatherObj: state.relevantWeatherObj };
};

export default connect(mapStateToProps)(Details);
