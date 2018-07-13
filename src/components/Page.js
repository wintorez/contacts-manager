import React from 'react';
import PropTypes from 'prop-types';
import { Header, Menu, Container, Loader, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Page = ({
  title,
  location: { pathname },
  loading,
  error,
  hideMenu,
  children
}) => (
  <Container style={{ marginTop: '1rem' }}>
    {title && (
      <Helmet>
        <title>{title} - Contacts Manager Demo</title>
      </Helmet>
    )}
    <Header as="h1" style={{ margin: `1.5rem 0` }}>
      Contacts Manager Demo
    </Header>
    {!hideMenu && (
      <Menu tabular>
        <Menu.Item active={pathname.startsWith('/employees')}>
          <Link to="/employees">Employees</Link>
        </Menu.Item>
        <Menu.Item active={pathname.startsWith('/settings')}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    )}
    {loading && <Loader active inline="centered" />}
    {error && (
      <Message negative>
        Oops! Something went wrong! Please try again later.
      </Message>
    )}
    {!loading && !error && <Container>{children}</Container>}
  </Container>
);

Page.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  hideMenu: PropTypes.bool,
  children: PropTypes.node
};

export default Page;
