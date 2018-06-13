import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions/weatherActions';

class CityListContainer extends Component {
  handleClick = event => {
    this.props.dispatchSelectCity(this.props.weatherObj);
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <h3>{this.props.weatherObj.name}</h3>
        <ul>
          <li>Temp: {this.props.weatherObj.temp}</li>
          <li>Low: {this.props.weatherObj.temp_min}</li>
          <li>High: {this.props.weatherObj.temp_max}</li>
          <li>Pressure: {this.props.weatherObj.pressure}</li>
          <li>Humidity: {this.props.weatherObj.humidity}</li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchSelectCity: weatherObj => dispatch(selectCity(weatherObj))
  };
};

export default connect(
  null,
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
