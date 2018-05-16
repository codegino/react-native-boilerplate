import { put } from 'redux-saga/effects';

import { authSignupSucceed } from '../actions/auth';

export function* authSignupSaga(action) {
  // const a = yield fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then(response => response.json())
  // .then(json => json);

  yield put(authSignupSucceed(action));
}
