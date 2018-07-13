import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Edit from '../Edit';

const defaults = {
  history: {},
  updateEmployee: jest.fn(),
  employee: {
    employeeId: '1',
    firstName: 'Joe',
    lastName: 'Bloggs',
    email: 'jblogs@email.com',
    telephone: '+1-555-444-3333',
    department: 'Engineering'
  }
};

describe('<Edit />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Edit {...defaults} location={{ pathname: '/employees/1/edit' }} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
