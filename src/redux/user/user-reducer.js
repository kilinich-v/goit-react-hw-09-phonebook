import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getUserSuccess,
  getUserError,
} from './user-actions';

const initialState = {
  email: null,
  name: null,
  password: null,
};

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState,
  [getUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(false, {
  [registerError]: () => (_, { payload }) => payload,
  [loginError]: () => (_, { payload }) => payload,
  [logoutError]: () => (_, { payload }) => payload,
  [getUserError]: () => (_, { payload }) => payload,
});

const isAuth = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [logoutSuccess]: () => false,
  [getUserSuccess]: () => true,
});

const userReducer = combineReducers({
  user,
  token,
  error,
  isAuth,
});

export default userReducer;
