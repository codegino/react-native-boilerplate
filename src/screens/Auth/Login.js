import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

type Props = {
  authData: String,
}

class LoginScreen extends React.Component<Props> {
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
