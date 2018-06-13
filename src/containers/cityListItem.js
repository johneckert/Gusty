import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentCity } from '../actions/weatherActions';

class CityListItem extends Component {
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
        <ul>
          <li>Name: {this.props.weatherObj.name}</li>
          <li>Temp: {this.props.weatherObj.temp}</li>
          <li>Icon: {this.props.weatherObj.icon}</li>
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
