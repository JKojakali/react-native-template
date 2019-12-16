import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper'
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import LoginButton from './components/login';
import { withNavigation } from 'react-navigation';

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <LoginButton />
      <Swiper
        dotStyle={{ height: 15, width: 15, borderRadius: 15 / 2 }}
        dotColor={'white'}
        activeDotStyle={{ height: 15, width: 15, borderRadius: 15 / 2 }}
        activeDotColor={'#DD6E42'}
        loop={false}
        autoplay
      >
        <Page1 />
        <Page2 />
        <Page3 
          onPress={() => { navigation.navigate('Register'); }}
        />
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#F4A259',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 36,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white',
  }
});

export default withNavigation(Onboarding);
