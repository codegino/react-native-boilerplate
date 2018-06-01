import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import AuthScreen from './src/screens/auth/Auth';
import HomeScreen from './src/screens/home/Home';
import SideDrawer from './src/screens/sidedrawer/SideDrawer';
import SampleModal from './src/screens/modals/SampleModal';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent('expenses.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('expenses.HomeScreen', () => HomeScreen);
Navigation.registerComponent('expenses.SideDrawer', () => SideDrawer);
Navigation.registerComponent('expenses.SampleModal', () => SampleModal);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'expenses.AuthScreen',
    title: 'Authentication',
  },
});
