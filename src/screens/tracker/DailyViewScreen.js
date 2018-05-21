import React from 'react';
import { View, Text } from 'react-native';
// import firebase from '../../services/firebase';

type Props = {
  navigator: Function,
}

class DailyViewScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

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

  componentDidMount() {
    // const fetchUserId = new Promise((resolve) => {
    //   const userId = firebase.auth().currentUser.uid;
    //   resolve(userId);
    // });

    // // SETTING TO FIREBASE
    // fetchUserId
    //   .then((userId) => {
    //     firebase.database().ref(`users/${userId}`).set({
    //       username: 'carlogino',
    //       email: 'carlogino@yahoo.com',
    //     });

    //     return userId;
    //   })
    //   // GETTING FROM FIREBASE
    //   .then((userId) => {
    //     const usernameRef = firebase.database().ref(`/users/${userId}/username`);

    //     usernameRef.on('value', (snapshot) => {
    //       console.log('REPLY:', snapshot.val())
    //     });
    //   })
    //   .catch(err => console.log(err))
  }

  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left',
        });
      }
    }
  };

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
