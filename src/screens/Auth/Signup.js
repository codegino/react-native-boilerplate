import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const signupScreen = () => {
  const onSignupHandler = () => {
  };

  return (
    <View>
      <Text>Signup</Text>
      <TextInput placeholder="Enter email address" />
      <TextInput placeholder="Enter password" />
      <TextInput placeholder="Repeat password" />
      <Button title="Sign up" onPress={onSignupHandler} />
    </View>
  );
};

export default signupScreen;
