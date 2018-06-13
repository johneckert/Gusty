import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityListContainer from './cityListContainer';
import { getWeatherFor } from '../actions/weatherActions';

class IndexContainer extends Component {
  componentDidMount() {
    this.props.cities.map(city => this.props.dispatchGetWeatherFor(city));
  }

  render() {
    return this.props.weatherObjs.length > 0 ? (
      <div>
        {this.props.weatherObjs.map(weatherObj => (
          <CityListContainer key={weatherObj.id} weatherObj={weatherObj} />
        ))}
      </div>
    ) : (
      <div>LOADING...</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    weatherObjs: state.weatherObjs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetWeatherFor: cityName => dispatch(getWeatherFor(cityName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
