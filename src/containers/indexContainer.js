import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityListItem from './cityListItem';

class IndexContainer extends Component {
  render() {
    return this.props.weatherObjs.length > 0 ? (
      <div>
        {this.props.weatherObjs.map(weatherObj => {
          return <CityListItem key={weatherObj.id} weatherObj={weatherObj} />;
        })}
      </div>
    ) : (
      <div>LOADING...</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherObjs: state.weatherObjs
  };
};

export default connect(mapStateToProps)(IndexContainer);
