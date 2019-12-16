import { createStackNavigator } from 'react-navigation-stack';

import MainStack from './main';
import OnboardingStack from './onboarding';
import Splash from './splash';
import { fadeIn } from 'react-navigation-transitions';

console.disableYellowBox = true

let AppStack = createStackNavigator(
  {
    Splash,
    Onboarding: OnboardingStack,
    Main: MainStack,
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    transitionConfig: () => fadeIn(),
  }
)

export default AppStack;
