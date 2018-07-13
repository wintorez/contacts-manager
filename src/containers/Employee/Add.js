import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Add from '../../components/Employee/Add';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  loading: state.status.loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addEmployee: employee =>
    dispatch(actions.addEmployee(employee)).then(({ value }) =>
      ownProps.history.push(`/employees/${value.employeeId}`)
    )
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Add)
);
