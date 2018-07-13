import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Detail from '../Detail';

const defaults = {
  history: {},
  employee: {
    employeeId: '1',
    firstName: 'Joe',
    lastName: 'Bloggs',
    email: 'jblogs@email.com',
    telephone: '+1-555-444-3333',
    department: 'Engineering'
  },
  location: { pathname: '/employees/1' }
};

describe('<Detail />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Detail {...defaults} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when loading', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Detail {...defaults} loading />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Detail {...defaults} error />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
