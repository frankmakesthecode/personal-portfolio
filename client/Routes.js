import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
