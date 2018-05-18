import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('calendar-blank', 30),
    Icon.getImageSource('calendar-today', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'menu' : 'menu', 30),
  ]).then((sources) => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.DailyViewScreen',
          label: 'Daily View',
          title: 'Daily View',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu',
                id: 'sideDrawerToggle',
              },
            ],
          },
        },
        {
          screen: 'awesome-places.MonthlyViewScreen',
          label: 'Monthly View',
          title: 'Monthly View',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu',
                id: 'sideDrawerToggle',
              },
            ],
          },
        },
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: 'orange',
      },
      appStyle: {
        tabBarSelectedButtonColor: 'orange',
      },
    });
  });
};

export default startTabs;
