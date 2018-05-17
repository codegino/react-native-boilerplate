import { put } from 'redux-saga/effects';

import { authSignupSucceed } from '../actions/auth';

export function* authSignupSaga(action) {
  const API_KEY = 'AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA';
  const link = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
  const token = yield fetch(link, {
    method: 'POST',
    body: JSON.stringify({
      email: action.authData.email,
      password: action.authData.password,
      returnSecureToken: true,
    }),
  })
    .then(response => response.json())
    .then(json => json)
    .catch((err) => {
      alert(err);
      return err;
    });
  yield console.log('RESP', token);
  yield put(authSignupSucceed(action));
}
