import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    justifyContent: 'center',
    fontSize: 16,
    marginLeft: 5,
  },
});

type Props = {
  item: {
    name: string,
    price: string,
    date: string
  }
}

const itemDisplay = (props: Props) => {
  const onItemSelectHandler = () => {};

  return (
    <TouchableNativeFeedback onPress={onItemSelectHandler}>
      <View style={styles.container}>
        <View style={styles.inline}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{props.item.name}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.inline}>
            <Text style={styles.label}>Price:</Text>
            <Text style={styles.value}>{props.item.price}</Text>
          </View>
          <View style={styles.inline}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{props.item.date}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default itemDisplay;
