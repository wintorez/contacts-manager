import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      promiseMiddleware({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'ERROR']
      })
    )
  );

export default configureStore;
