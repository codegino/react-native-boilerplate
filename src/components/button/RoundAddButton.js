import React from 'react';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: '#eee',
    borderRadius: 10000,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  size: number,
  onPress: Function,
};

const RoundAddButton = (props : Props) => {
  const size = {
    height: props.size + 2,
    width: props.size + 2,
  };

  return (
    <View style={[styles.floatingButton, size]}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <Icon
          name="plus-circle"
          size={props.size}
          color="green"
        />
      </TouchableNativeFeedback>
    </View >
  );
};

export default RoundAddButton;
