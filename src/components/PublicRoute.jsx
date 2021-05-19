import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSelectors } from '../redux/user';

const PublicRoute = ({
  component: Component,
  isAuth,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuth: userSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
