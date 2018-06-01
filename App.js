import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import AuthScreen from './src/screens/auth/Auth';
import HomeScreen from './src/screens/home/Home';
import SideDrawer from './src/screens/sidedrawer/SideDrawer';
import AddNewItemModal from './src/screens/modals/AddNewItemModal';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent('expenses.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('expenses.HomeScreen', () => HomeScreen);
Navigation.registerComponent('expenses.SideDrawer', () => SideDrawer);
Navigation.registerComponent(
  'expenses.AddNewItemModal',
  () => AddNewItemModal,
  store,
  Provider,
);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'expenses.AuthScreen',
    title: 'Authentication',
  },
});
