import React from 'react';
import { View, Text } from 'react-native';

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

  componentDidMount() {
    // fetch(
    //   "https://gihooh-expenses.firebaseio.com/item.json"
    //   // ?auth=" +
    //   //   token
    // )
    // .then(res => console.log(res))
    // .catch(err => console.log(err));
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
