import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityListContainer extends Component {
  render() {
    return (
      <div>
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

export default CityListContainer;

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
