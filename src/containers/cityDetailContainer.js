import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../components/currentWeather';
import Forecast from '../components/forecast';
import Details from '../components/details';

class CityDetailContainer extends Component {
  render() {
    return (
      <div>
        <h2>CITY DETAIL CONTAINER</h2>
        <CurrentWeather />
        <Forecast />
        <Details />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(CityDetailContainer);
