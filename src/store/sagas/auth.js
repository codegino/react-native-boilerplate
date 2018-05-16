import { AUTH_SIGNUP } from '../actions/actionTypes'
import { authSignup, authSignupSucceed } from '../actions/auth';
import { put } from 'redux-saga/effects';

export function* authSignupSaga(action) {
  yield setTimeout(() => {
    console.log('1');
  }, 1000);
  yield put(authSignupSucceed(action.authData));
  yield console.log('2', action.authData)
  yield setTimeout(() => {
    console.log('3');
  }, 1000);
  yield setTimeout(() => {
    console.log('4');
  }, 1000);
}