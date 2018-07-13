import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Settings from '../components/Settings';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Settings)
);
