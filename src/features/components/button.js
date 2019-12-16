import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => { onPress() }}>
        <Text style={styles.buttonText}>
        {text}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 80
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Avenir',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 35,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'white'
  },
});


export default Button;
