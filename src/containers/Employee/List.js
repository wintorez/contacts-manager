import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from '../../components/Employee/List';

const mapStateToProps = (state, ownProps) => ({
  loading: state.status.loading,
  error: state.status.error,
  employees: state.employees
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)
);
