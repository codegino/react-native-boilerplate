import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { authSignupSaga } from './auth';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_SIGNUP, authSignupSaga);
}
