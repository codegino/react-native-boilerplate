import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

type Props = {
  item: {
    name: string,
    price: string,
    date: string
  }
}

const itemDisplay = (props: Props) => (
  <View style={styles.container}>
    <Text>Name: {props.item.name}</Text>
    <Text>Price: {props.item.price}</Text>
    <Text>Date: {props.item.date}</Text>
  </View>
);

export default itemDisplay;
