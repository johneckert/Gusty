import React, { Component } from 'react';
import { connect } from 'react-redux';

const CityListItem = props => {
  return (
    <a href={`/${props.weatherObj.url}`}>
      <ul className={`city-panel skyline-${props.weatherObj.url} ${props.weatherObj.color}`}>
        <li>{props.weatherObj.name}</li>
        <li>
          <img
            src={`./weatherIcons/${props.weatherObj.icon}.svg`}
            alt={props.weatherObj.description}
          />
        </li>
        <li>{`${props.weatherObj.temp}\u00B0`}</li>
      </ul>
    </a>
  );
};

const mapStateToProps = state => {
  return { currentCity: state.currentCity };
};

export default connect(mapStateToProps)(CityListItem);
