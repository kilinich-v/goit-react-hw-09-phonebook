import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { HomeView, LoginView, RegisterView, PhonebookView } from './views';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppMenu from './components/AppMenu';
import UserMenu from './components/UserMenu';
import { userSelectors, userOperations } from './redux/user';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff',
    borderColor: '#fff',
    fontFamily: 'inherit',
  },
  title: {
    flexGrow: 1,
  },
}));

const App = ({ isAuth, getUser }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ClickAwayListener onClickAway={handleClickAway}>
              <div>
                <MenuIcon onClick={handleClick} />
                {open ? <AppMenu /> : null}
              </div>
            </ClickAwayListener>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Phonebook
          </Typography>
          {isAuth ? (
            <UserMenu />
          ) : (
            <Typography variant="h6">
              <NavLink to={routes.login}>
                <Button variant="outlined" className={classes.menuButton}>
                  Login
                </Button>
              </NavLink>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <PublicRoute
          restricted
          path={routes.register}
          component={RegisterView}
          redirectTo={routes.phonebook}
        />
        <PublicRoute
          restricted
          path={routes.login}
          component={LoginView}
          redirectTo={routes.phonebook}
        />
        <PrivateRoute
          path={routes.phonebook}
          component={PhonebookView}
          redirectTo={routes.login}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = state => ({
  isAuth: userSelectors.getAuthenticated(state),
});

const mapDispatchToProps = {
  getUser: userOperations.getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
