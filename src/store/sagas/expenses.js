import { put } from 'redux-saga/effects';

import { onLoadingEnd, onLoadingStart } from '../actions/ui';
import { fetchExpensesSuccess, addExpensesSuccess, fetchExpensesFail } from '../actions/expenses';
import firebase from '../../services/firebase';

export function* fetchExpensesSaga() {
  yield put(onLoadingStart());
  try {
    const userId = yield firebase.auth().currentUser.uid;

    const expenses = yield firebase.database()
      .ref(`/users/${userId}/item`)
      .once('value').then(snapshot => snapshot.val());

    yield put(fetchExpensesSuccess(expenses));
  } catch (error) {
    yield put(fetchExpensesFail());
  }
  yield put(onLoadingEnd());
}

export function* addExpensesSaga(action) {
  yield put(onLoadingStart());
  const fetchUserId = new Promise((resolve) => {
    const userId = firebase.auth().currentUser.uid;
    resolve(userId);
  });

  fetchUserId
    .then((userId) => {
      firebase.database().ref(`users/${userId}`).set({
        item: action.item,
      });
    });

  yield put(addExpensesSuccess(action.item));
  yield put(onLoadingEnd());
}
