import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';

import { fetchExpenses } from '../../store/actions/expenses';
import ItemDisplay from '../../components/item/ItemDisplay';
import styles from './dailyViewScreenStyle';

type Props = {
  navigator: Function,
  fetchExpenses: Function,
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
    this.props.navigator.showModal({
      screen: 'expenses.AddNewItemModal',
      title: 'Add new item',
      animationType: 'slide-up',
    });
  }

  render() {
    const exp = this.props.expenses.map(item => (
      <ItemDisplay key={item.id} item={item} />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.content}>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyViewScreen);
