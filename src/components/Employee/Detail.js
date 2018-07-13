import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header, List, Button, Divider } from 'semantic-ui-react';
import Page from '../Page';

const Detail = ({ location, history, loading, error, employee }) => (
  <Page
    title={employee ? `${employee.firstName} ${employee.lastName}` : undefined}
    location={location}
    loading={loading}
    error={error}
  >
    <Button floated="right" onClick={() => history.push('/employees')}>
      Back
    </Button>
    <Header as="h3" floated="left">
      {employee ? 'Employee Detail' : 'Employee Not Found'}
    </Header>
    <Divider clearing hidden />
    {employee && (
      <Fragment>
        <List relaxed="very">
          <List.Item>
            <List.Header>Name</List.Header>
            <List.Description>
              {`${employee.firstName} ${employee.lastName}`}
            </List.Description>
          </List.Item>
          <List.Item>
            <List.Header>Email</List.Header>
            <List.Description>
              <a href={`mailto:${employee.email}`}>{employee.email}</a>
            </List.Description>
          </List.Item>
          {employee.telephone && (
            <List.Item>
              <List.Header>Telephone</List.Header>
              <List.Description>
                <a href={`tel:${employee.telephone}`}>{employee.telephone}</a>
              </List.Description>
            </List.Item>
          )}
          {employee.department && (
            <List.Item>
              <List.Header>Department</List.Header>
              <List.Description>{employee.department}</List.Description>
            </List.Item>
          )}
          <List.Item>
            <Button
              onClick={() =>
                history.push(`/employees/${employee.employeeId}/edit`)
              }
            >
              Edit
            </Button>
          </List.Item>
        </List>
      </Fragment>
    )}
  </Page>
);

Detail.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  employee: PropTypes.object
};

export default Detail;
