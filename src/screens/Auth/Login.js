import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
  propTypes = {
    authData: undefined,
  }

  state = {
    username: '',
  }

  onLoginHandler = () => {
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
  authData: state.auth.token,
});

export default connect(mapStateToProps)(LoginScreen);
