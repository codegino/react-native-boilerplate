import React from 'react';
import { View, Text, TextInput } from 'react-native';

const loginScreen = props => (
  <View>
    <Text>Login</Text>
    <TextInput placeholder='Username'/>
    <TextInput placeholder='Password'/>
  </View>
)

export default loginScreen;
