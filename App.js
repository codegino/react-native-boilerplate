import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import AuthScreen from './src/screens/auth/Auth';
import HomeScreen from './src/screens/home/Home';
import MonthlyViewScreen from './src/screens/tracker/MonthlyViewScreen';
import DailyViewScreen from './src/screens/tracker/DailyViewScreen';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('awesome-places.HomeScreen', () => HomeScreen);
Navigation.registerComponent('awesome-places.MonthlyViewScreen', () => MonthlyViewScreen);
Navigation.registerComponent('awesome-places.DailyViewScreen', () => DailyViewScreen);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Authentication',
  },
});
