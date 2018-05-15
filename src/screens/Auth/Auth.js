import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Login from './Login'
import Signup from './Signup'

// eslint-disable-next-line
class AuthScreen extends Component {
  state = {
    mode: 'login'
  }

  onSwitchModeHandler = () => {
    this.setState(prevState => {
      return {
        ...this.prevState,
        mode: prevState.mode === 'login' ? 'signup' : 'login'
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
        <Button title="Switch to login" onPress={this.onSwitchModeHandler}/>
      </View>);
  }
}

export default AuthScreen;
