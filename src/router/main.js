

import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../features/main/main';

let GroupsStack = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    defaultNavigationOptions: {
      header: null
    },
  }
);

export default GroupsStack;
