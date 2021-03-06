import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../components/currentWeather';
import ForecastContainer from './forecastContainer';
import Details from '../components/details';
import { setCurrentCity, getSingleWeatherFor, getForecastFor } from '../actions/weatherActions';

class CityDetailContainer extends Component {
  componentDidMount() {
    const currentCity = this.props.location.pathname
      .split('/')[1]
      .split('-')
      .join(' ');
    this.props.dispatchSetCurrentCity(currentCity);
    this.props.dispatchGetSingleWeatherFor(currentCity);
    this.props.dispatchGetForecastFor(currentCity);
  }
  render() {
    return (
      <div className="main">
        <CurrentWeather />
        <ForecastContainer />
        <Details />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchSetCurrentCity: cityName => dispatch(setCurrentCity(cityName)),
    dispatchGetSingleWeatherFor: cityName => dispatch(getSingleWeatherFor(cityName)),
    dispatchGetForecastFor: cityName => dispatch(getForecastFor(cityName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CityDetailContainer);
