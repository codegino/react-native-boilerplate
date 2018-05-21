import React from 'react';
import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const buttonWithBackground = props => (
  <Button styles={styles} {...props} />
);

export default buttonWithBackground;
