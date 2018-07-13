import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import List from '../List';

const defaults = {
  history: {},
  updateEmployee: jest.fn(),
  employees: [
    {
      employeeId: '1',
      firstName: 'Joe',
      lastName: 'Bloggs',
      email: 'jblogs@email.com',
      telephone: '+1-555-444-3333',
      department: 'Engineering'
    },
    {
      employeeId: '2',
      firstName: 'John',
      lastName: 'Smith',
      email: 'jsmith@gmail.com',
      telephone: '+1-777-888-9999',
      department: 'Marketing & Sales'
    }
  ]
};

describe('<List />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <List {...defaults} location={{ pathname: '/employees' }} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when loading', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <List {...defaults} location={{ pathname: '/employees' }} loading />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when error', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <List {...defaults} location={{ pathname: '/employees' }} error />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
