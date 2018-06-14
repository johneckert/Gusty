import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentCity } from '../actions/weatherActions';
// import cloud from '../weatherIcons/cloud.svg';
// import heavyRain from '../weatherIcons/heavyRain.svg';
// import mist from '../weatherIcons/mist.svg';
// import moon from '../weatherIcons/moon.svg';
// import partMoon from '../weatherIcons/partMoon.svg';
// import partSun from '../weatherIcons/partSun.svg';
// import rain from '../weatherIcons/rain.svg';
// import snow from '../weatherIcons/snow.svg';
// import sun from '../weatherIcons/sun.svg';
// import thunderstorm from '../weatherIcons/thunderstorm.svg';

class CityListItem extends Component {
  formatURL = weatherObj => {
    const url = weatherObj.name
      .split(' ')
      .join('-')
      .toLowerCase();
    return url;
  };

  render() {
    console.log(this.props.weatherObj.icon);
    return (
      <a href={'/' + this.formatURL(this.props.weatherObj)}>
        <ul>
          <li>{this.props.weatherObj.name}</li>
          <li>{`${this.props.weatherObj.temp}&deg;`}</li>
          <li>
            <img
              src={`./weatherIcons/${this.props.weatherObj.icon}.svg`}
              alt={this.props.weatherObj.description}
            />
          </li>
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
