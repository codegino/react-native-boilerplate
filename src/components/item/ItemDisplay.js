import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './itemDisplayStyle';

type Props = {
  item: {
    name: string,
    price: string,
    date: string,
  },
};

class ItemDisplay extends React.Component<Props> {
  state = {
    isMenuVisible: false,
  }

  onPressHandler = () => {
    // TODO add viewing of individual item
  }

  onLongPressHandler = () => {
    this.setState(prevState => ({
      ...this.state,
      isMenuVisible: !prevState.isMenuVisible,
    }));
  }


  onEditItemHandler = () => {
    // TODO add edit handler
  }

  onDeleteItemHandler = () => {
    // TODO add edit handler
  }

  onCloseHanlder = () => {
    this.setState(() => ({
      ...this.state,
      isMenuVisible: false,
    }));
  }

  render() {
    let menu = null;

    if (this.state.isMenuVisible) {
      const menuButton = (color, label, icon, onPressHandler) => (
        <TouchableNativeFeedback onPress={onPressHandler}>
          <View style={[styles.menuButton, { borderColor: color }]}>
            <Text style={[styles.menuButtonText, { color }]}>{label}</Text>
            <Icon
              name={icon}
              size={40}
              color={color}
            />
          </View>
        </TouchableNativeFeedback>
      );

      menu = (
        <View style={styles.menu}>
          {menuButton('blue', 'Edit', 'pencil', this.onEditItemHandler)}
          {menuButton('red', 'Delete', 'delete', this.onDeleteItemHandler)}
          {menuButton('orange', 'Close', 'close', this.onCloseHanlder)}
        </View>
      );
    }
    return (
      <TouchableNativeFeedback onPress={this.onPressHandler} onLongPress={this.onLongPressHandler}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <View style={styles.inline}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{this.props.item.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.inline}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.value}>{this.props.item.price}</Text>
              </View>
              <View style={styles.inline}>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>{this.props.item.date}</Text>
              </View>
            </View>
            {menu}
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default ItemDisplay;
