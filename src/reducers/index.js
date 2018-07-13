import { combineReducers } from 'redux';
import employees from './employees';
import status from './status';

const rootReducer = combineReducers({
  employees,
  status
});

export default rootReducer;
