import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityListContainer from './cityListContainer';

class IndexContainer extends Component {
  componentDidMount() {
    this.props.cities.map(city => this.props.dispatchGetWeather(city));
  }

  //TODO: Maybe re-executes get request evey 5 minutes to keep data up to date??

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

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetWeather: () => {
      dispatch(getWeather());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
