import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import LoginButton from './login';

const page2 = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}> 
        Page 2
      </Text>
      <Text style={styles.imagePlaceholder}> 
        O
      </Text>
      <Text style={styles.contentText}> 
        Cursus metus aliquam eleifend mi in. Eget nullam non nisi est sit 
        amet facilisis magna etiam. Scelerisque fermentum dui faucibus 
        in ornare quam viverra orci sagittis. Tristique senectus et netus
         et malesuada fames.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#F4A259',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 36,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 50
  },
  imagePlaceholder: {
    fontSize: 200,
    fontFamily: 'Avenir',
    color: 'white',
    marginTop: 50
  },
  contentText: {
    fontSize: 16,
    fontFamily: 'Avenir',
    color: 'white',
    marginTop: 50,
    marginHorizontal: 40
  },
});

export default page2;
