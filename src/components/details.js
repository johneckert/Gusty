import React from 'react';
import { connect } from 'react-redux';

const Details = props => {
  const formatedDesc = string => {
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
          <h5>DESCRIPTION</h5>
          <h4>{formatedDesc(props.weatherObj.description)}</h4>
        </li>
        <li />
        <li>
          <h5>LOCAL TIME</h5>
          <h4>{props.weatherObj.time}</h4>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <h5>HUMIDITY</h5>
          <h4>{props.weatherObj.humidity}%</h4>
        </li>
        <li>
          <h5>PRESSURE</h5>
          <h4>{props.weatherObj.pressure} mHg</h4>
        </li>
        <li>
          <h5>WIND</h5>
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
