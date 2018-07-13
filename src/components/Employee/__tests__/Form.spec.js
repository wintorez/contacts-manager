import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Form from '../Form';

const defaults = {
  history: {},
  onSubmit: jest.fn(),
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
  it('renders correctly with employee', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Form {...defaults} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without employee', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Form {...defaults} employee={undefined} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when loading', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Form {...defaults} loading />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
