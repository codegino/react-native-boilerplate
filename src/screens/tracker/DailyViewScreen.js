import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { fetchExpenses, addExpenses } from '../../store/actions/expenses';

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
    const item = {
      name: 'Test name',
      price: 5.2,
    };

    this.props.addExpenses(item);
  }

  render() {
    const exp = this.props.expenses.map(item => (
      <View key={item.name}>
        <Text>Name: {item.name}</Text>
        <Text>Price: {item.price}</Text>
      </View>
    ));

    return (
      <View>
        <Text>DailyViewScreen</Text>
        <Button title="Add" onPress={this.onButtonPressHandler} />
        {exp}
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
