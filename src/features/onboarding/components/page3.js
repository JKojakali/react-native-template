import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from '../../components/button';

const page3 = ({ onPress }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}> 
        Page 3   
      </Text>
      <Text style={styles.imagePlaceholder}> 
        O
      </Text>
      <Text style={styles.contentText}> 
        Commodo viverra maecenas accumsan lacus vel facilisis 
        volutpat est velit. Rutrum quisque non tellus orci ac
        auctor augue. 
      </Text>
      <Button 
        onPress={() => { onPress(); }}
        text={'register'}
      />
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
    marginHorizontal: 40,
    marginBottom: 30
  },
  registerButton: {
    fontSize: 16,
    fontFamily: 'Avenir',
    color: 'white',
    marginTop: 50,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15
  }
});

export default page3;
