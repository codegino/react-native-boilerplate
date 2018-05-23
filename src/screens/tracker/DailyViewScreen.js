import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';

import { fetchExpenses, addExpenses } from '../../store/actions/expenses';
import styles from './dailyViewScreenStyle';

type Props = {
  navigator: Function,
  fetchExpenses: Function,
  addExpenses: Function,
  expenses: Array,
  isLoading: boolean,
}

class DailyViewScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this.props.fetchExpenses();
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

  onButtonPressHandler = () => {
    // const item = {
    //   name: 'Test name',
    //   price: 5.2,
    // };

    // this.props.addExpenses(item);
    this.props.navigator.showModal({
      screen: "expenses.AddNewItemModal", // unique ID registered with Navigation.registerScreen
      title: "Add new item", // title of the screen as appears in the nav bar (optional)
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
  }

  render() {
    const exp = this.props.expenses.map(item => (
      <View key={item.id}>
        <Text>Name: {item.name}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Date: {item.date}</Text>
      </View>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>DailyViewScreen</Text>
          {exp}
        </View>

        <View style={styles.floatingButton}>
          <TouchableNativeFeedback onPress={this.onButtonPressHandler}>
            <Icon
              name="plus-circle"
              size={50}
              color="yellowgreen"
            />
          </TouchableNativeFeedback>
        </View>
        <Spinner visible={this.props.isLoading} textContent="Loading..." textStyle={{ color: '#FFF' }} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses,
  isLoading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch(fetchExpenses()),
  addExpenses: item => dispatch(addExpenses(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyViewScreen);
