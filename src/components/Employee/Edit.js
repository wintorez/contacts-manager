import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Divider } from 'semantic-ui-react';
import Page from '../Page';
import Form from './Form';

const Edit = ({ location, history, loading, employee, updateEmployee }) => (
  <Page title="Employee Edit" location={location}>
    <Button
      floated="right"
      onClick={() => history.push(`/employees/${employee.employeeId}`)}
    >
      Back
    </Button>
    <Header as="h3" floated="left">
      Employee Edit
    </Header>
    <Divider clearing hidden />
    <Form employee={employee} onSubmit={updateEmployee} loading={loading} />
  </Page>
);

Edit.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  employee: PropTypes.object.isRequired,
  updateEmployee: PropTypes.func.isRequired
};

export default Edit;
