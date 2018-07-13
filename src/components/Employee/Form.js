import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const defaultState = {
  employeeId: null,
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  department: ''
};

export default class extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    employee: {}
  };

  state = {
    ...defaultState,
    ...this.props.employee
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.props.onSubmit(this.state);

  render() {
    const { loading } = this.props;
    const {
      employeeId,
      firstName,
      lastName,
      email,
      telephone,
      department
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} disabled={loading}>
        <Grid columns="2" stackable>
          <Grid.Row>
            <Grid.Column>
              <Form.Input
                label="First Name"
                placeholder="First Name"
                defaultValue={firstName}
                name="firstName"
                onChange={this.handleChange}
                required
              />
            </Grid.Column>
            <Grid.Column>
              <Form.Input
                label="Last Name"
                placeholder="Last Name"
                defaultValue={lastName}
                name="lastName"
                onChange={this.handleChange}
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Input
                label="Email"
                placeholder="Email"
                type="email"
                defaultValue={email}
                name="email"
                onChange={this.handleChange}
                required
              />
            </Grid.Column>
            <Grid.Column>
              <Form.Input
                label="Telephone"
                placeholder="Telephone"
                type="tel"
                defaultValue={telephone}
                name="telephone"
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Input
                label="Department"
                placeholder="Department"
                defaultValue={department}
                name="department"
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button type="submit" loading={loading}>
                Save
              </Button>{' '}
              or{' '}
              <Link to={employeeId ? `/employees/${employeeId}` : '/employees'}>
                Cancel
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}
