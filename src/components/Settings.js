import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Form, Checkbox, Button } from 'semantic-ui-react';
import Page from './Page';

const Settings = ({ location }) => (
  <Page title="Settings" location={location}>
    <Header as="h3">Settings</Header>
    <Form>
      {['1', '2', '3', '4'].map(number => (
        <Form.Field key={number}>
          <Checkbox label={`Value ${number}`} />
        </Form.Field>
      ))}
      <Button type="submit">Save</Button> or <Link to="/employees">Cancel</Link>
    </Form>
  </Page>
);

Settings.propTypes = {
  location: PropTypes.object.isRequired
};

export default Settings;
