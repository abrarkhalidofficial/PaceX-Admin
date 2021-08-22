import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
{
  /* <NavigationContainer></NavigationContainer> */
}
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}
