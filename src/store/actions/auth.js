import {AUTH_INITIATE_SIGNUP, AUTH_SIGNUP} from './actionTypes'

export const authSignup = (authData) => {
  return {
    type: AUTH_INITIATE_SIGNUP,
    authData: authData
  }
}

export const authSignupSucceed = (authData) => {
  return {
    type: AUTH_SIGNUP,
    authData: authData
  }
}