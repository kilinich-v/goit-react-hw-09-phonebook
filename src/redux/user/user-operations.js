import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getUserRequest,
  getUserSuccess,
  getUserError,
} from './user-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credential => async dispatch => {
  dispatch(registerRequest());

  try {
    const responce = await axios.post('/users/signup', credential);

    token.set(responce.data.token);
    dispatch(registerSuccess(responce.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const login = credential => async dispatch => {
  dispatch(loginRequest());

  try {
    const responce = await axios.post('/users/login', credential);

    token.set(responce.data.token);
    dispatch(loginSuccess(responce.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    const responce = await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);
  dispatch(getUserRequest());

  try {
    const responce = await axios.get('/users/current');

    dispatch(getUserSuccess(responce.data));
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getUser,
};
