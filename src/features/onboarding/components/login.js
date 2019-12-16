import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Login = () => {
  return (
    <TouchableOpacity style={{ position: 'absolute', left: 20, top: 60, zIndex: 50 }}>
      <Text style={styles.loginText}>
        Login
      </Text>
    </ TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginText: {
    fontSize: 16,
    fontFamily: 'Avenir',
    color: 'white',
  },
});

export default Login;
