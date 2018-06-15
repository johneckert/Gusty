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
    <div className="details-panel">
      <h2>Details</h2>
      <ul>
        <li>
          <h2>DESCRIPTION</h2>
          <h4>{formated(props.weatherObj.description)}</h4>
        </li>
        <li />
        <li>
          <h2>LOCAL TIME</h2>
          <h4>{props.weatherObj.time}</h4>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <h2>HUMIDITY</h2>
          <h4>{props.weatherObj.humidity}%</h4>
        </li>
        <li>
          <h2>PRESSURE</h2>
          <h4>{props.weatherObj.pressure} mHg</h4>
        </li>
        <li>
          <h2>WIND</h2>
          <h4>{props.weatherObj.wind} mph</h4>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { weatherObj: state.relevantWeatherObj };
};

export default connect(mapStateToProps)(Details);
