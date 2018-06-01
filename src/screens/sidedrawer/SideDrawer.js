import React from 'react';
import { Navigation } from 'react-native-navigation';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './sideDrawerStyle';

const sideDrawer = () => {
  const showAddNewitemModal = () => {
    Navigation.showModal({
      screen: 'expenses.SampleModal',
      title: 'Add New Item',
      animationType: 'slide-up',
    });
  };

  return (
    <View
      style={[
        styles.container,
        { width: Dimensions.get('window').width * 0.8 },
      ]}
    >
      <TouchableOpacity onPress={showAddNewitemModal}>
        <View style={styles.drawerItem}>
          <Icon
            name="plus-circle-outline"
            size={30}
            color="#aaa"
            style={styles.drawerItemIcon}
          />
          <Text>Add Item</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default sideDrawer;
