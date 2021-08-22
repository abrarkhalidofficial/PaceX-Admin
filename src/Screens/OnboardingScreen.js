import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, ImageBackground} from 'react-native';
import ButttonComponent from '../Components/ButttonComponent';
import {
  HEADING_FONT_SIZE,
  HEIGHT,
  NORMAL_FONT_SIZE,
  SCREEN_PADDING_BOTTOM,
  SCREEN_PADDING_HORIZONTAL,
  SCREEN_PADDING_TOP,
  WIDTH,
} from '../Constants/GlobalStyles';
import Logo from '../Components/Logo';
import {PRIMARY, SECONDARY} from '../Constants/Colors';

const Stack = createNativeStackNavigator();

class DiscoverScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/discover__bg.png')}
        style={{
          paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
          paddingTop: SCREEN_PADDING_TOP,
          paddingBottom: SCREEN_PADDING_BOTTOM,
          width: WIDTH,
          height: HEIGHT,
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo />
        </View>
        <Text
          style={{
            fontSize: HEADING_FONT_SIZE,
            color: SECONDARY,
            fontWeight: '600',
          }}>
          Discover
        </Text>
        <View
          style={{
            backgroundColor: PRIMARY,
            height: 8,
            width: 100,
            borderRadius: 5,
            marginTop: 5,
          }}
        />
        <Text
          style={{
            color: SECONDARY,
            fontSize: NORMAL_FONT_SIZE,
            marginTop: 10,
            marginBottom: 30,
          }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          sunt dignissimos fugit consequatur? Voluptatem quam alias, enim
          corporis facilis eveniet nisi sequi. Pariatur cupiditate odit
          inventore ullam sit laudantium quaerat!
        </Text>
        <ButttonComponent
          text="Next"
          varient="primary"
          onPress={() => {
            navigation.navigate('Explore');
          }}
        />
      </ImageBackground>
    );
  }
}

class ExploreScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/explore_bg.png')}
        style={{
          paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
          paddingTop: SCREEN_PADDING_TOP,
          paddingBottom: SCREEN_PADDING_BOTTOM,
          width: WIDTH,
          height: HEIGHT,
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo />
        </View>
        <Text
          style={{
            fontSize: HEADING_FONT_SIZE,
            color: SECONDARY,
            fontWeight: '600',
          }}>
          Explore
        </Text>
        <View
          style={{
            backgroundColor: PRIMARY,
            height: 8,
            width: 100,
            borderRadius: 5,
            marginTop: 5,
          }}
        />
        <Text
          style={{
            color: SECONDARY,
            fontSize: NORMAL_FONT_SIZE,
            marginTop: 10,
            marginBottom: 30,
          }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          sunt dignissimos fugit consequatur? Voluptatem quam alias, enim
          corporis facilis eveniet nisi sequi. Pariatur cupiditate odit
          inventore ullam sit laudantium quaerat!
        </Text>
        <ButttonComponent
          text="Next"
          varient="primary"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </ImageBackground>
    );
  }
}

class OnboardingScreen extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{header: () => null}}
        initialRouteName="Discover">
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
      </Stack.Navigator>
    );
  }
}

export default OnboardingScreen;
