import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Detail from '../../components/Employee/Detail';

const mapStateToProps = (state, ownProps) => ({
  loading: state.status.loading,
  employee: state.employees.find(
    each => each.employeeId === ownProps.match.params.employeeId
  )
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Detail)
);
