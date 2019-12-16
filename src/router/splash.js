


import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../features/splash/splash.js';

let Splash = createStackNavigator(
  {
    Splash: SplashScreen,
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default Splash;
