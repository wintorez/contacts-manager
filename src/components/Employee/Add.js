import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';
import Form from './Form';
import { Header, Button, Divider } from 'semantic-ui-react';

const Add = ({ location, history, loading, addEmployee }) => (
  <Page title="Employee Add" location={location}>
    <Button floated="right" onClick={() => history.push('/employees')}>
      Back
    </Button>
    <Header as="h3" floated="left">
      Employee Add
    </Header>
    <Divider clearing hidden />
    <Form onSubmit={addEmployee} loading={loading} />
  </Page>
);

Add.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  addEmployee: PropTypes.func.isRequired
};

export default Add;
