import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import { fetchExpenses } from '../../store/actions/expenses';
import ItemDisplay from '../../components/item/ItemDisplay';
import RoundAddButton from '../../components/button/RoundAddButton';
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
        <ScrollView contentContainerStyle={styles.content}>
          {exp}
        </ScrollView>

        <View style={styles.floatingButton}>
          <RoundAddButton onPress={this.onButtonPressHandler} size={50} />
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
