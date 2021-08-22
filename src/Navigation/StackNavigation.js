import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/OnboardingScreen';
import SignUpScreen from '../Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{header: () => null}}
        initialRouteName="SignUp">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigation;
