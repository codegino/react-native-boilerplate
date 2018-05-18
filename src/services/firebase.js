import * as firebase from 'firebase';

let instance = null;

const firebaseConfig = {
  apiKey: 'AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA',
  authDomain: 'gihooh-expenses.firebaseapp.com',
  databaseURL: 'https://gihooh-expenses.firebaseio.com',
  projectId: 'gihooh-expenses',
  storageBucket: 'gihooh-expenses.appspot.com',
  messagingSenderId: '618252278301',
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
