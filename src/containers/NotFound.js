import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotFound)
);
