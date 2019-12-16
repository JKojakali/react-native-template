import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

const page1 = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}> 
        Page 1   
      </Text>
      <Text style={styles.imagePlaceholder}> 
        O
      </Text>
      <Text style={styles.contentText}> 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
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

export default page1;
