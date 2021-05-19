import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSelectors } from '../redux/user';

const PrivateRoute = ({
  component: Component,
  isAuth,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isAuth: userSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
