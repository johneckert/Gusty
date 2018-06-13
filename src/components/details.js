import React from 'react';
import { connect } from 'react-redux';

const Details = props => {
  return (
    <div>
      <h3>Details</h3>
      <ul>
        <li>Temp: {props.weatherObj.temp}</li>
        <li>Pressure: {props.weatherObj.pressure}</li>
        <li>Humidity: {props.weatherObj.humidity}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { weatherObj: state.relevantWeatherObj };
};

export default connect(mapStateToProps)(Details);
