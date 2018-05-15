import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {connect} from 'react-redux';
import {authSignup} from '../../../src/store/actions/index'

const loginScreen = props => {
  const onLoginHandler = () => {
    props.onLogin('Yow Yow');
  }

  return (
    <View>
      <Text>Login {props.authData}</Text>
      <TextInput placeholder='Username'/>
      <TextInput placeholder='Password'/>
      <Button title="Login" onPress={onLoginHandler} />
    </View>
  )
}

const mapStateToProps = state => {
  return {
   authData: state.auth.authData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: authData => dispatch(authSignup(authData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginScreen);
