import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const loginScreen = props => {
  const onLoginHandler = () => {
    alert('Login')
  }


  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder='Username'/>
      <TextInput placeholder='Password'/>
      <Button title="Login" onPress={onLoginHandler} />
    </View>
  )
}

export default loginScreen;
