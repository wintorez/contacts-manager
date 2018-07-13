import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Edit from '../../components/Employee/Edit';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  loading: state.status.loading,
  employee: state.employees.find(
    each => each.employeeId === ownProps.match.params.employeeId
  )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateEmployee: employee =>
    dispatch(actions.updateEmployee(employee)).then(() =>
      ownProps.history.push(`/employees/${employee.employeeId}`)
    )
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit)
);
