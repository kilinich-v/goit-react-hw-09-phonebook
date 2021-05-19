import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('user/registerRequest');
export const registerSuccess = createAction('user/registerSuccess');
export const registerError = createAction('user/registerError');

export const loginRequest = createAction('user/loginRequest');
export const loginSuccess = createAction('user/loginSuccess');
export const loginError = createAction('user/loginError');

export const logoutRequest = createAction('user/logoutRequest');
export const logoutSuccess = createAction('user/logoutSuccess');
export const logoutError = createAction('user/logoutError');

export const getUserRequest = createAction('user/getUserRequest');
export const getUserSuccess = createAction('user/getUserSuccess');
export const getUserError = createAction('user/getUserError');
