import * as firebase from 'firebase';

let instance = null;

const firebaseConfig = {
  apiKey: 'AIzaSyC-DMH-xQWmsZi7K7D5thu1mJNW6H2fMEU',
  authDomain: 'react-native-boilerplate-dda65.firebaseapp.com',
  databaseURL: 'https://react-native-boilerplate-dda65.firebaseio.com',
  projectId: 'react-native-boilerplate-dda65',
  storageBucket: '',
  messagingSenderId: '465648645297',
};

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(firebaseConfig);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;

export default firebaseService;
