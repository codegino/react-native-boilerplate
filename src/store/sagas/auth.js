import { put } from 'redux-saga/effects';

import { authSignupSucceed } from '../actions/auth';

export function* authSignupSaga(action) {
  const API_KEY = 'AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA';
  const link = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
  const response = yield fetch(link, {
    method: 'POST',
    body: JSON.stringify({
      email: action.authData.email,
      password: action.authData.password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(json => json)
    .catch(() => undefined);

  yield put(authSignupSucceed(response));
}
