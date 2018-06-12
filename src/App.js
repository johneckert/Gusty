import React, { Component } from 'react';
import Header from './components/header';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import IndexContainer from './containers/indexContainer';
import CityDetailContainer from './containers/cityDetailContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/single" component={CityDetailContainer} />
          <Route path="*" component={IndexContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
