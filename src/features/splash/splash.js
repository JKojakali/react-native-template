import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { withNavigation } from 'react-navigation';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding')
    }, 1000);
  })
  
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Animatable.Text 
        animation="fadeInUp" 
        style={styles.titleText}
      >
        Kospin
      </Animatable.Text>
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

export default withNavigation(Splash);
