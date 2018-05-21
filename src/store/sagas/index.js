import { takeEvery, takeLatest } from 'redux-saga/effects';
import { authSignupSaga, authLoginSaga } from './auth';
import { fetchExpensesSaga, addExpensesSaga } from './expenses';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield takeLatest(actionTypes.AUTH_INITIATE_SIGNUP, authSignupSaga);
  yield takeLatest(actionTypes.AUTH_INITIATE_LOGIN, authLoginSaga);
}

export function* watchExpenses() {
  yield takeEvery(actionTypes.FETCH_EXPENSES_START, fetchExpensesSaga);
  yield takeLatest(actionTypes.ADD_EXPENSES_START, addExpensesSaga);
}
