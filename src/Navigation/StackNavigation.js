import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{header: () => null}}
        initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigation;
