import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentWrapper: {
    paddingTop: 20,
    width: '80%',
    flex: 1,
    alignItems: 'center',
  },
});

class AddNewItemModal extends React.Component {
  state = {
    content: 'Modal Content',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text>{this.state.content}</Text>
        </View>
      </View>
    );
  }
}

export default AddNewItemModal;
