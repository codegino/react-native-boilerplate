import { takeLatest } from 'redux-saga/effects';
import { authSignupSaga, authLoginSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';

// eslint-disable-next-line
export function* watchAuth() {
  yield takeLatest(actionTypes.AUTH_INITIATE_SIGNUP, authSignupSaga);
  yield takeLatest(actionTypes.AUTH_INITIATE_LOGIN, authLoginSaga);
}
