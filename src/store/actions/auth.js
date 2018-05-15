import {AUTH_SIGNUP} from './actionTypes'

export const authSignup = (authData) => {
  return {
    type: AUTH_SIGNUP,
    authData: authData
  }
}