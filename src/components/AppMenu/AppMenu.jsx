import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import routes from '../../routes';
import { userSelectors } from '../../redux/user';

const useStyles = makeStyles(theme => ({
  dropdownRoot: {
    flexGrow: 1,
  },
  dropdown: {
    position: 'absolute',
    width: '125px',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const AppMenu = ({ isAuth }) => {
  const classes = useStyles();

  return (
    <div className={classes.dropdownRoot}>
      <Typography variant="h6">
        <ul className={classes.dropdown}>
          <li className="nav-list__item">
            <NavLink
              exact
              to={routes.home}
              className="nav-list__link"
              activeClassName="nav-list__link--active"
            >
              Home
            </NavLink>
          </li>
          {isAuth ? (
            <li className="nav-list__item">
              <NavLink
                exact
                to={routes.phonebook}
                className="nav-list__link"
                activeClassName="nav-list__link--active"
              >
                Phonebook
              </NavLink>
            </li>
          ) : null}
          {isAuth ? null : (
            <li className="nav-list__item">
              <NavLink
                exact
                to={routes.register}
                className="nav-list__link"
                activeClassName="nav-list__link--active"
              >
                Registration
              </NavLink>
            </li>
          )}
          {isAuth ? null : (
            <li className="nav-list__item">
              <NavLink
                exact
                to={routes.login}
                className="nav-list__link"
                activeClassName="nav-list__link--active"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </Typography>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: userSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(AppMenu);
