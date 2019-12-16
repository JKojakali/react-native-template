import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Alert } from 'react-native';
import Button from '../components/button';
import { withNavigation } from 'react-navigation';

const RegisterScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  let updatePhoneNumberField = (text) => {
    setPhoneNumber(text);
  }

  let onSubmitButtonPress = () => {
    navigation.navigate('PinCode'); 
    // if(phoneNumber === '') {
    //   Alert.alert(
    //     'Invalid',
    //     'Please put in a correct phone number'
    //   )
    // } else if (phoneNumber.length < 9) {
    //   Alert.alert(
    //     'Invalid',
    //     'Please put in a correct phone number'
    //   )
    // }

    // navigation.navigate('PinCode');
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.imagePlaceholder}> 
        O
      </Text>
      <Text style={styles.contentText}>
        Please enter in your phone number so we can create your account.
      </Text>
      <TextInput 
        style={styles.textInputText}
        placeholder={'Phone Number'}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        keyboardType={'phone-pad'}
        onChangeText={(text) => { updatePhoneNumberField(text) }}
        maxLength={10}
      />
      <Button 
        onPress={() => { onSubmitButtonPress(); }}
        text={'Submit'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#F4A259',
    alignItems: 'center'
  },
  contentText: {
    fontSize: 16,
    fontFamily: 'Avenir',
    color: 'white',
    marginTop: 50,
    marginHorizontal: 40
  },
  imagePlaceholder: {
    fontSize: 200,
    fontFamily: 'Avenir',
    color: 'white',
  },
  textInputText: {
    height: 100, 
    width: '75%', 
    color: 'white', 
    fontFamily: 'Avenir',
    borderRadius: 1,
    borderColor: 'white'
  }
});

export default withNavigation(RegisterScreen);
