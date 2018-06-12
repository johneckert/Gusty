import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityListContainer from './cityListContainer';
import { getWeatherFor } from '../actions/weatherActions';

class IndexContainer extends Component {
  componentDidMount() {
    console.log('cities: ', this.props.cities);
    this.props.cities.map(city => this.props.dispatchGetWeatherFor(city));
  }

  render() {
    return (
      <div>
        <h2>INDEX CONTAINER</h2>
        {this.props.weatherObjs
          ? this.props.weatherObjs.map(cityObj => <CityListContainer key={cityObj.id} />)
          : null}
      </div>
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
    dispatchGetWeatherFor: city_name => dispatch(getWeatherFor(city_name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
