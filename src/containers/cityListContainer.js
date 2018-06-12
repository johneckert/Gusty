import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityListContainer extends Component {
  render() {
    return <div>CITY CONTAINER</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(CityListContainer);
