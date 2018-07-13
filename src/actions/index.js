import * as api from '../api';

export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

export const getEmployees = () => ({
  type: GET_EMPLOYEES,
  payload: api.getEmployees()
});

export const addEmployee = employee => ({
  type: ADD_EMPLOYEE,
  payload: api.addEmployee(employee)
});

export const updateEmployee = employee => ({
  type: UPDATE_EMPLOYEE,
  payload: api.updateEmployee(employee)
});
