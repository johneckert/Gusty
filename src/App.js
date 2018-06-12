import React, { Component } from 'react';
import Header from './components/header';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import IndexContainer from './containers/indexContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" component={IndexContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
