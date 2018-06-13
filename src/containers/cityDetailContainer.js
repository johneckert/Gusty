import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../components/currentWeather';
import Forecast from '../components/forecast';
import Details from '../components/details';
import { setCurrentCity } from '../actions/weatherActions';

class CityDetailContainer extends Component {
  componentDidMount() {
    const currentCity = this.props.location.pathname
      .split('/')[1]
      .split('-')
      .join(' ');
    this.props.dispatchSetCurrentCity(currentCity);
  }
  render() {
    return (
      <div>
        <h2>{this.props.currentCity.toUpperCase()}</h2>
        <CurrentWeather />
        <Forecast />
        <Details />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentCity: state.currentCity };
};

const mapDispatchToProps = dispatch => {
  return { dispatchSetCurrentCity: cityName => dispatch(setCurrentCity(cityName)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetailContainer);
