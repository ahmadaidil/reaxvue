import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // HashRouter as Router
} from 'react-router-dom';
import { HomePage, CounterPage } from './pages';

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/counter" component={CounterPage} />
    </Switch>
  </Router>
);
