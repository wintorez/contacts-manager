import * as actions from '../actions';
import produce from 'immer';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case `${actions.GET_EMPLOYEES}_SUCCESS`:
      return action.payload;

    case `${actions.UPDATE_EMPLOYEE}_SUCCESS`:
      return produce(state, draft => {
        const index = draft.findIndex(
          employee => employee.employeeId === action.payload.employeeId
        );
        if (index > -1) draft[index] = action.payload;
        else draft.push(action.payload);
      });

    case `${actions.ADD_EMPLOYEE}_SUCCESS`:
      return produce(state, draft => {
        draft.push(action.payload);
      });

    default:
      return state;
  }
};
