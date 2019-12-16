import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Alert, TextInput, Keyboard} from 'react-native';
import Button from '../components/button';

import * as Animatable from 'react-native-animatable';

const RegisterScreen = () => {
  const [pinCode, setPinCode] = useState('');
  const [animation, setAnimationType] = useState(undefined);

  let updatePinCodeField = (text, focusNextInput) => {
    let updatedPinCode = pinCode + text;
    setPinCode(updatedPinCode);

    if(updatedPinCode.length === 4) {
      onSubmitPinCode(updatedPinCode);
    }
  }

  let onSubmitPinCode = (updatedPinCode) => {
    console.log(updatedPinCode);

    setAnimationType('shake');
    let boolean = false;
    if(boolean) {
      setPinCode('')
    } else {
      setPinCode('')
    }
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.imagePlaceholder}> 
        O
      </Text>
      <Animatable.View 
        style={{ flexDirection: 'row' }} 
        animation={animation}
        onTransitionEnd={() => { setPinCode('') }}
      >
        <TextInput 
          style={styles.pinCodeText}
          onChangeText={(text) => { updatePinCodeField(text, this.two.focus()) }}
          maxLength={1}
          selectionColor={'rgba(255,255,255,0.4)'}
        />
        <TextInput 
          style={styles.pinCodeText}
          onChangeText={(text) => { updatePinCodeField(text, this.three.focus()) }}
          maxLength={1}
          ref={(input) => { this.two = input; }}
          selectionColor={'rgba(255,255,255,0.4)'}
        />
        <TextInput 
          style={styles.pinCodeText}
          onChangeText={(text) => { updatePinCodeField(text, this.four.focus()) }}
          ref={(input) => { this.three = input; }}
          maxLength={1}
          selectionColor={'rgba(255,255,255,0.4)'}
        />
        <TextInput 
          style={styles.pinCodeText}
          onChangeText={(text) => { updatePinCodeField(text, Keyboard.dismiss()) }}
          ref={(input) => { this.four = input; }}
          maxLength={1}
          selectionColor={'rgba(255,255,255,0.4)'}
        />
      </Animatable.View>
      <Text style={styles.contentText}>
        Please enter the code you recieved via SMS.
      </Text>
      <Button 
        onPress={() => { updatePinCodeField(); }}
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
  pinCodeText: {
    height: 80, 
    width: 60,
    marginHorizontal: 5,
    color: 'white', 
    fontFamily: 'Avenir',
    fontSize: 50,
    backgroundColor: '#EDD382',
    borderRadius: 35 / 2,
    textAlign: 'center'
  }
});

export default RegisterScreen;
