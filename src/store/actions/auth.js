import { AUTH_INITIATE_SIGNUP, AUTH_SIGNUP } from './actionTypes';

export const authSignup = authData => ({
  type: AUTH_INITIATE_SIGNUP,
  authData,
});

export const authSignupSucceed = authData => ({
  type: AUTH_SIGNUP,
  authData,
});
