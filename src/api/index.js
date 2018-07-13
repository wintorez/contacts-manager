// NOTE: Using this method to fake network delay
const wait = ms => new Promise(r => setTimeout(r, ms));

export const getEmployees = () =>
  fetch(`/api/employees.json`).then(response => response.json());

let nextEmployeeId = 4;
export const addEmployee = employee =>
  wait(500).then(() => ({ ...employee, employeeId: `${nextEmployeeId++}` }));

export const updateEmployee = employee =>
  wait(500).then(() => ({ ...employee }));
