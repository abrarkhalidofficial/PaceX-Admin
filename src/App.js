import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';
import {HEIGHT, WIDTH} from './Constants/GlobalStyles';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <StackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}
