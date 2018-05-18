import React from 'react';
import { View, Text } from 'react-native';
import firebase from '../../services/firebase';

class DailyViewScreen extends React.Component {
  state = {
    expenses: [{
      id: '1',
      value: 'Carlo',
    },
    {
      id: '2',
      value: 'Gino',
    },
    ],
  }

  // fetchFromServer = function* (userId) {
  //   // yield firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //   //   yield console.log(snapshot)
  //   // });
  // }

  componentDidMount() {
    const fetchUserId = new Promise((resolve , reject) => {
      const userId = firebase.auth().currentUser.uid;
      resolve(userId);
    })

    // SETTING TO FIREBASE
    fetchUserId.then(
      userId => {
      firebase.database().ref('users/' + userId).set({
        username: 'carlogino',
        email: 'carlogino@yahoo.com',
      });

      return userId;
      }
    )
    // GETTING FROM FIREBASE
    .then( userId => {
      console.log('fetching')
      const usernameRef = firebase.database().ref(`/users/${userId}/username` );

      usernameRef.on('value', (snapshot) => {
        console.log('REPLY:', snapshot.val())
      });
    })
    .catch( err => console.log(err))
  }

  render() {
    const exp = this.state.expenses.map(item => (
      <Text key={item.id}>{item.value}</Text>
    ));
    return (
      <View>
        {exp}
        <Text>DailyViewScreen</Text>
      </View>
    );
  }
}

export default DailyViewScreen;
