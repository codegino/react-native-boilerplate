import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, ActivityIndicator } from 'react-native';
import Login from './Login';
import Signup from './Signup';

type Props = {
  isLoading: boolean,
}

class AuthScreen extends Component<Props> {
  state = {
    mode: 'login',
    buttonTitle: 'Switch to signup',
  }

  onSwitchModeHandler = () => {
    this.setState(prevState => ({
      ...this.prevState,
      mode: prevState.mode === 'login' ? 'signup' : 'login',
      buttonTitle: prevState.mode === 'login' ? 'Switch to Login' : 'Switch to Signup',
    }));
  }

  render() {
    let layout = <Login />;
    let buttonToDisplay = (
      <Button title={this.state.buttonTitle} onPress={this.onSwitchModeHandler} />
    );

    if (this.state.mode === 'signup') {
      layout = <Signup />;
    }

    if (this.props.isLoading === true) {
      buttonToDisplay = <ActivityIndicator />;
    }

    return (
      <View>
        {buttonToDisplay}
        {layout}
      </View>);
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.loading,
});

export default connect(mapStateToProps)(AuthScreen);
