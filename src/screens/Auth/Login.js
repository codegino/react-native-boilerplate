import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { authLogin } from '../../store/actions';

type Props = {
  onLogin: Function,
}

class LoginScreen extends React.Component<Props> {
  state = {
    email: 'carloginocatapang@gmail.com',
    password: 'Gnapatac1202',
  }

  onLoginHandler = () => {
    const authData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.onLogin(authData);
  }

  onChangeEmailHandler = (email) => {
    this.setState(prevState => ({
      ...prevState,
      email,
    }));
  };

  onChangePasswordHandler = (password) => {
    this.setState(prevState => ({
      ...prevState,
      password,
    }));
  };

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput placeholder="Email" value={this.state.email} onChangeText={this.onChangeEmailHandler} />
        <TextInput placeholder="Password" secureTextEntry value={this.state.password} onChangeText={this.onChangePasswordHandler} />
        <Button title="Login" onPress={this.onLoginHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: authData => dispatch(authLogin(authData)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
