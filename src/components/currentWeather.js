import React from 'react';
import { connect } from 'react-redux';

const currentWeather = props => {
  return (
    <ul className={`city-panel ${props.weatherObj.color}`}>
      <li>{props.weatherObj.name}</li>
      <li>
        <img
          src={`./weatherIcons/${props.weatherObj.icon}.svg`}
          alt={props.weatherObj.description}
        />
      </li>
      <li>{`${props.weatherObj.temp}\u00B0`}</li>
    </ul>
  );
};

const mapStateToProps = state => {
  return { weatherObj: state.relevantWeatherObj };
};

export default connect(mapStateToProps)(currentWeather);
