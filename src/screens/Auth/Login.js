import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { authSignup } from '../../../src/store/actions/index';

class LoginScreen extends React.Component {
  state = {
    username: '',
  }

  onLoginHandler = () => {
    this.props.onLogin(this.state.username);
  }

  onChangeTextHandler = (event) => {
    this.setState(prevState => ({
      ...prevState,
      username: event,
    }));
  };

  render() {
    return (
      <View>
        <Text>Login {this.props.authData}</Text>
        <TextInput placeholder="Username" value={this.state.username} onChangeText={this.onChangeTextHandler} />
        <TextInput placeholder="Password" />
        <Button title="Login" onPress={this.onLoginHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.auth.authData,
});

const mapDispatchToProps = dispatch => ({
  onLogin: authData => dispatch(authSignup(authData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
