import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page';
import { Segment, Header } from 'semantic-ui-react';

const NotFound = ({ location }) => (
  <Page title="Page Not Found" location={location} hideMenu>
    <Segment>
      <Header as="h3">Page Not Found</Header>
    </Segment>
  </Page>
);

NotFound.propTypes = {
  location: PropTypes.object.isRequired
};

export default NotFound;
