import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { authSignup } from '../../../src/store/actions/index';

class SignupScreen extends React.Component {
  componentWillMount() {
    this.resetState();
  }

  onSignupHandler = () => {
    if (this.state.password === this.state.confirmPassword) {
      const authData = {
        email: this.state.email,
        password: this.state.password,
      };

      this.props.onSignup(authData);
    } else {
      // TODO handle validation
    }
  }

  onEmailChangeHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      email: value,
    }));
  }

  onPasswordChangeHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      password: value,
    }));
  }

  onConfirmPasswordChangeHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      confirmPassword: value,
    }));
  }

  resetState = () => {
    this.setState(() => ({
      email: '',
      password: '',
      confirmPassword: '',
    }));
  }

  render() {
    return (
      <View>
        <Text>Signup</Text>
        <TextInput placeholder="Enter email address" value={this.state.email} onChangeText={this.onEmailChangeHandler} />
        <TextInput placeholder="Enter password" value={this.state.password} onChangeText={this.onPasswordChangeHandler} />
        <TextInput placeholder="Repeat password" value={this.state.confirmPassword} onChangeText={this.onConfirmPasswordChangeHandler} />
        <Button title="Sign up" onPress={this.onSignupHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignup: authData => dispatch(authSignup(authData)),
});

export default connect(null, mapDispatchToProps)(SignupScreen);
