import { put } from 'redux-saga/effects';

import { onLoadingEnd, onLoadingStart } from '../actions/ui';
import { fetchExpensesSuccess, addExpensesSuccess, fetchExpensesFail } from '../actions/expenses';
import firebase from '../../services/firebase';

export function* fetchExpensesSaga() {
  yield put(onLoadingStart());
  try {
    const userId = yield firebase.auth().currentUser.uid;

    const expensesRefVal = yield firebase.database()
      .ref(`/users/${userId}/items`)
      .once('value').then(snapshot => snapshot.val());

    const expenses = Object.keys(expensesRefVal).map(id => ({
      ...expensesRefVal[id],
      id,
    }));

    yield put(fetchExpensesSuccess(expenses));
  } catch (error) {
    yield put(fetchExpensesFail());
  }
  yield put(onLoadingEnd());
}

export function* addExpensesSaga(action) {
  yield put(onLoadingStart());
  const userId = yield firebase.auth().currentUser.uid;

  const addItemRef = firebase.database().ref(`users/${userId}/items`).push({
    ...action.item,
  });

  const item = {
    id: addItemRef.key,
    ...addItemRef,
  };

  yield put(addExpensesSuccess(item));
  yield put(onLoadingEnd());
}
