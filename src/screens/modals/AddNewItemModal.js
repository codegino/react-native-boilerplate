import React from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import dateformat from 'dateformat';

import DefaultInput from '../../components/input/DefaultInput';
import { addExpenses } from '../../store/actions/expenses';

type Props = {
  addExpenses: Function,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentWrapper: {
    paddingTop: 20,
    width: '80%',
    flex: 1,
    alignItems: 'center',
  },
  nameWrapper: {
    width: '100%',
  },
  priceWrapper: {
    width: '100%',
  },
  dateWrapper: {
    width: '100%',
  },
  addButtonWrapper: {
    width: '80%',
    margin: 20,
  },
});

class AddNewItemModal extends React.Component<Props> {
  state = {
    name: '',
    price: '',
    date: dateformat(new Date(), 'mm-dd-yyyy'),
  }

  onNameChangeHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      name: value,
    }));
  };

  onPriceChangeHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      price: value,
    }));
  };

  onDateChangeHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      date: value,
    }));
  };

  onAddItemHandler = () => {
    if (this.state.name === '' || this.state.price === '') {
      return;
    }

    const item = {
      name: this.state.name,
      price: this.state.price,
      date: this.state.date,
    };

    this.props.addExpenses(item);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.nameWrapper}>
            <Text style={{ fontSize: 20 }}>Name</Text>
            <DefaultInput value={this.state.name} onChangeText={this.onNameChangeHandler} placeholder="Enter item name" />
          </View>
          <View style={styles.priceWrapper}>
            <Text style={{ fontSize: 20 }}>Price</Text>
            <DefaultInput keyboardType="numeric" value={this.state.price} onChangeText={this.onPriceChangeHandler} placeholder="Enter price" />
          </View>
          <View style={styles.dateWrapper}>
            <Text style={{ fontSize: 20 }}>Date</Text>
            <DatePicker
              style={{ width: '100%' }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="MM-DD-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={this.onDateChangeHandler}
            />
          </View>
        </View>
        <View style={styles.addButtonWrapper}>
          <Button title="Add" onPress={this.onAddItemHandler} />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpenses: item => dispatch(addExpenses(item)),
});

export default connect(null, mapDispatchToProps)(AddNewItemModal);
