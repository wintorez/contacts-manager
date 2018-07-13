import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/symbol';
import 'core-js/es6/array';
import 'raf/polyfill';
import 'isomorphic-fetch';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import configureStore from './store/configureStore';
import * as actions from './actions';
import 'semantic-ui-css/semantic.css';

const store = configureStore();

store.dispatch(actions.getEmployees());

render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById('root')
);
