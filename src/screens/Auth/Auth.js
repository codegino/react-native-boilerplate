import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Login from './Login'
import Signup from './Signup'

// eslint-disable-next-line
class AuthScreen extends Component {
  state = {
    mode: 'login',
    buttonTitle: 'Switch to signup'
  }

  onSwitchModeHandler = () => {
    this.setState(prevState => {
      return {
        ...this.prevState,
        mode: prevState.mode === 'login' ? 'signup' : 'login',
        buttonTitle: prevState.mode === 'login' ? 'Switch to Login' : 'Switch to Signup' 
      }
    })
  }

  render() {
    let layout = <Login/>;

    if (this.state.mode === 'signup') {
      layout = <Signup/>
    }
    return (
      <View>
        {layout}
        <Button title={this.state.buttonTitle} onPress={this.onSwitchModeHandler}/>
      </View>);
  }
}

export default AuthScreen;
