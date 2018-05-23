import React from 'react';
import { Button, View, Text, TextInput, StyleSheet, DatePickerAndroid } from 'react-native';
import DatePicker from 'react-native-datepicker';

import DefaultInput from '../../components/input/DefaultInput'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
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
})

class AddNewItemModal extends React.Component {
  state = {
    name: '',
    date: '2016-05-15',
  }

  onNameChangeHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      name: value,
    }))
  };

  onDateChangeHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      date: value,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.nameWrapper}>
            <Text>Name</Text>
            <DefaultInput value={this.state.name} onChangeText={this.onNameChangeHandler} />
          </View>
          <View style={styles.priceWrapper}>
            <Text>Price</Text>
            <DefaultInput value={this.state.price} onChangeText={this.onNameChangeHandler} />
          </View>
          <View>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={this.onDateChangeHandler}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default AddNewItemModal;
