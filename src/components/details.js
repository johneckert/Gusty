import React from 'react';
import { connect } from 'react-redux';

const Details = props => {
  const formated = string => {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return '--';
    }
  };

  return (
    <div>
      <h3>Details</h3>
      <ul>
        <li>DESCRIPTION {formated(props.weatherObj.description)}</li>
        <li>LOCAL TIME {props.weatherObj.time}</li>
        <li>HUMIDITY {props.weatherObj.humidity}%</li>
        <li>PRESSURE {props.weatherObj.pressure} mHg</li>
        <li>WIND {props.weatherObj.wind} mph</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { weatherObj: state.relevantWeatherObj };
};

export default connect(mapStateToProps)(Details);
