import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

// eslint-disable-next-line
class SignupScreen extends Component {
  render() {
    return (
      <View>
        <Text>Signup</Text>
        <TextInput placeholder="Enter email address"/>
        <TextInput placeholder="Enter password"/>
        <TextInput placeholder="Repeat password"/>
      </View>);
  }
}

export default SignupScreen;
