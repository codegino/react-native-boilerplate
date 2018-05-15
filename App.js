import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux'
import React from 'react'
import AuthScreen from './src/screens/Auth/Auth';
import configureStore from './src/store/configureStore'

const store = configureStore();

// Register Screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen, store, Provider);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Authentication',
  },
});
