import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import IndexContainer from './containers/indexContainer';
import CityDetailContainer from './containers/cityDetailContainer';
import { getWeatherFor } from './actions/weatherActions';

class App extends Component {
  componentDidMount() {
    this.props.cities.map(city => this.props.dispatchGetWeatherFor(city));
  }

  formatURL = city => {
    const url = city.split(' ').join('-');
    return url;
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          {this.props.cities.map((city, i) => {
            return (
              <Route key={i} path={'/' + this.formatURL(city)} component={CityDetailContainer} />
            );
          })}

          <Route path="*" component={IndexContainer} />
        </Switch>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return { cities: state.cities };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetWeatherFor: cityName => dispatch(getWeatherFor(cityName))
  };
};

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(App);
