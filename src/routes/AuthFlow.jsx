import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SIGNIN, SIGNUP} from '../constant/routes';
import SignInScreen from '../screens/AuthFlow/SignInScreen';
import SignUpScreen from '../screens/AuthFlow/SignUpScreen';

const AuthFlow = () => {
  const AuthFlowStack = createNativeStackNavigator();

  return (
    <AuthFlowStack.Navigator  screenOptions={{
        headerShown:false
    }}>
      <AuthFlowStack.Screen name={SIGNIN} component={SignInScreen} />
      <AuthFlowStack.Screen name={SIGNUP} component={SignUpScreen} />
    </AuthFlowStack.Navigator>
  );
};

export default AuthFlow;


