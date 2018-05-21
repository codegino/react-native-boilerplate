export const AUTH_SIGNUP = 'AUTH_SIGNUP';
export const AUTH_INITIATE_SIGNUP = 'AUTH_INITIATE_SIGNUP';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_INITIATE_LOGIN = 'AUTH_INITIATE_LOGIN';

export const authSignup = authData => ({
  type: AUTH_INITIATE_SIGNUP,
  authData,
});

export const authSignupSucceed = authData => ({
  type: AUTH_SIGNUP,
  authData,
});

export const authLogin = authData => ({
  type: AUTH_INITIATE_LOGIN,
  authData,
});

export const authLoginSucceed = authData => ({
  type: AUTH_LOGIN,
  token: authData.token,
  userId: authData.userId,
});
