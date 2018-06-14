import React from 'react';
import { connect } from 'react-redux';

const currentWeather = props => {
  return (
    <div>
      <ul>
        <li>{props.weatherObj.name}</li>
        <li>{`${props.weatherObj.temp}\u00B0`}</li>
        <li>
          <img
            src={`./weatherIcons/${props.weatherObj.icon}.svg`}
            alt={props.weatherObj.description}
          />
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { weatherObj: state.relevantWeatherObj };
};

export default connect(mapStateToProps)(currentWeather);
