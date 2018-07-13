import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Employee from './Employee';
import Settings from './Settings';
import NotFound from './NotFound';

const App = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Redirect from="/" to="/employees" exact />
      <Route path="/employees" component={Employee.List} exact />
      <Route path="/employees/add" component={Employee.Add} exact />
      <Route path="/employees/:employeeId" component={Employee.Detail} exact />
      <Route
        path="/employees/:employeeId/edit"
        component={Employee.Edit}
        exact
      />
      <Route path="/settings" component={Settings} exact />
      <Route status={404} component={NotFound} />
    </Switch>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
