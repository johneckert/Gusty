import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentCity } from '../actions/weatherActions';

class CityListContainer extends Component {
  formatURL = weatherObj => {
    const url = weatherObj.name
      .split(' ')
      .join('-')
      .toLowerCase();
    return url;
  };

  render() {
    return (
      <a href={'/' + this.formatURL(this.props.weatherObj)}>
        <h3>{this.props.weatherObj.name}</h3>
        <ul>
          <li>Temp: {this.props.weatherObj.temp}</li>
          <li>Low: {this.props.weatherObj.temp_min}</li>
          <li>High: {this.props.weatherObj.temp_max}</li>
          <li>Pressure: {this.props.weatherObj.pressure}</li>
          <li>Humidity: {this.props.weatherObj.humidity}</li>
        </ul>
      </a>
    );
  }
}

const mapStateToProps = state => {
  return { currentCity: state.currentCity };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchSetCurrentCity: currentCity => dispatch(setCurrentCity(currentCity))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityListContainer);

// const cityData = {
//   id: json.id,
//   name: json.name,
//   time: json.dt,
//   weather: json.weather,
//   temp: json.main.temp,
//   low: json.main.temp_min,
//   high: json.main.temp_max,
//   pressure: json.main.pressure,
//   humidity: json.main.humidity
// };
