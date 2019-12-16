

import { createStackNavigator } from 'react-navigation-stack';
import OnboardingScreen from '../features/onboarding/onboarding';
import RegisterScreen from '../features/onboarding/register';
import PinCodeScreen from '../features/onboarding/pincode';

let OnboardingStack = createStackNavigator(
  {
    Onboarding: OnboardingScreen,
    Register: RegisterScreen,
    PinCode: PinCodeScreen,
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default OnboardingStack;
