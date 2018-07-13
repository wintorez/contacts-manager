import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Page from '../Page';

const defaults = {
  history: {},
  location: { pathname: '/employees' }
};

describe('<Page />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Page {...defaults}>Page Content</Page>
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without content', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Page {...defaults} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when loading', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Page {...defaults} loading>
            Page Content
          </Page>
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Page {...defaults} error>
            Page Content
          </Page>
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when hiding menu', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Page {...defaults} hideMenu>
            Page Content
          </Page>
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
