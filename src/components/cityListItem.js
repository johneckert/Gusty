import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentCity } from '../actions/weatherActions';

class CityListItem extends Component {
  cityURL = this.props.weatherObj.name
    ? this.props.weatherObj.name
        .split(' ')
        .join('-')
        .toLowerCase()
    : null;

  render() {
    return (
      <a href={`/${this.cityURL}`}>
        <ul className={`city-panel skyline-${this.cityURL} ${this.props.weatherObj.color}`}>
          <li>{this.props.weatherObj.name}</li>
          <li>
            <img
              src={`./weatherIcons/${this.props.weatherObj.icon}.svg`}
              alt={this.props.weatherObj.description}
            />
          </li>
          <li>{`${this.props.weatherObj.temp}\u00B0`}</li>
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
)(CityListItem);
