import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { userOperations } from '../redux/user';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const RegisterView = ({ onSubmit }) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handleName = event => {
    setName(event.target.value);
  };
  const handlePass = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email,
      name,
      password,
    };

    onSubmit(user);
    reset();
  };

  const reset = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={handleEmail}
      />
      <TextField
        label="Name"
        variant="outlined"
        onChange={handleName}
        value={name}
      />
      <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={handlePass}
        value={password}
      />
      <Button type="submit" variant="contained" color="primary">
        Sing up
      </Button>
    </form>
  );
};

const mapDispatchToProps = {
  onSubmit: userOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
