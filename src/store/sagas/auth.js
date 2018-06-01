import { put } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { authSignupSucceed, authLoginSucceed } from '../actions/auth';
import { onLoadingEnd, onLoadingStart } from '../actions/ui';
import firebaseService from '../../services/firebase';

export function* authSignupSaga(action) {
  try {
    yield put(onLoadingStart());
    const { email, password } = action.authData;

    firebaseService.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        put(onLoadingEnd());
      });

    const currentUser = yield firebaseService.auth().currentUser;
    yield put(authSignupSucceed({
      token: currentUser.qa,
      userId: currentUser.uid,
    }));

    yield Navigation.startSingleScreenApp({
      screen: {
        screen: 'expenses.AuthScreen',
        title: 'Login',
      },
    });
    yield put(onLoadingEnd());
  } catch (error) {
    yield put(onLoadingEnd());
  }
}

export function* authLoginSaga(action) {
  try {
    yield put(onLoadingStart());
    yield firebaseService.auth()
      .signInWithEmailAndPassword(action.authData.email, action.authData.password);

    const currentUser = yield firebaseService.auth().currentUser;
    yield put(authLoginSucceed({
      token: currentUser.qa,
      userId: currentUser.uid,
    }));
    yield Navigation.startSingleScreenApp({
      screen: {
        screen: 'expenses.HomeScreen',
        title: 'Login',
      },
    });
    yield put(onLoadingEnd());
  } catch (error) {
    yield put(onLoadingEnd());
  }
}
