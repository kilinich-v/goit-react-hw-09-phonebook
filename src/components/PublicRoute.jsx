import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelectors } from '../redux/user';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuth = useSelector(userSelectors.getAuthenticated);

  return (
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
};

export default PublicRoute;
