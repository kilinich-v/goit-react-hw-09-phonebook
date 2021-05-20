import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelectors } from '../redux/user';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuth = useSelector(userSelectors.getAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;
