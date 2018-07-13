import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';
import { Table, Button, Loader, Message } from 'semantic-ui-react';

const { Header, Row, HeaderCell, Cell, Body } = Table;

const List = ({ location, history, loading, error, employees }) => (
  <Page title="Employees" location={location}>
    {loading && <Loader active inline="centered" />}
    {error && (
      <Message negative>
        Oops! Something went wrong! Please try again later.
      </Message>
    )}
    {!error &&
      !loading && (
        <Fragment>
          <Table celled selectable>
            <Header>
              <Row>
                <HeaderCell>Employee Id</HeaderCell>
                <HeaderCell>First Name</HeaderCell>
                <HeaderCell>Last Name</HeaderCell>
                <HeaderCell>Email</HeaderCell>
              </Row>
            </Header>
            <Body>
              {employees.map(({ employeeId, firstName, lastName, email }) => (
                <Row
                  key={employeeId}
                  style={{ cursor: 'pointer' }}
                  onClick={() => history.push(`/employees/${employeeId}`)}
                >
                  <Cell>{employeeId}</Cell>
                  <Cell>{firstName}</Cell>
                  <Cell>{lastName}</Cell>
                  <Cell>{email}</Cell>
                </Row>
              ))}
            </Body>
          </Table>
          <Button onClick={() => history.push('/employees/add')}>
            Add New Employee
          </Button>
        </Fragment>
      )}
  </Page>
);

List.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired
};

export default List;
