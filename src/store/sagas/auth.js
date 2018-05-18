import { put } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { authSignupSucceed, authLoginSucceed } from '../actions/auth';
import startExpensesTabs from '../../screens/tracker/startExpensesTabs';
import firebaseService from '../../services/firebase';

export function* authSignupSaga(action) {
  try {
    const { email, password } = action.authData;

    firebaseService.auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
      });

    const currentUser = yield firebaseService.auth().currentUser;
    yield put(authSignupSucceed({
      token: currentUser.qa,
      userId: currentUser.uid,
    }));

    yield Navigation.startSingleScreenApp({
      screen: {
        screen: 'awesome-places.AuthScreen',
        title: 'Login',
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export function* authLoginSaga(action) {
  try {
    yield firebaseService.auth()
      .signInWithEmailAndPassword(action.authData.email, action.authData.password);

    const currentUser = yield firebaseService.auth().currentUser;
    yield put(authLoginSucceed({
      token: currentUser.qa,
      userId: currentUser.uid,
    }));
    yield startExpensesTabs();
  } catch (error) {
    console.log(error);
  }
}
