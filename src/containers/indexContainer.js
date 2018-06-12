import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityListContainer from './cityListContainer';

class IndexContainer extends Component {
  render() {
    return (
      <div>
        <h2>INDEX CONTAINER</h2>
        {this.props.cities.map((city, i) => <CityListContainer key={i} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cities: state.cities };
};

export default connect(mapStateToProps)(IndexContainer);
