import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ButttonComponent from '../Components/ButttonComponent';
import InputComponent from '../Components/InputComponent';
import {
  HEIGHT,
  NORMAL_FONT_SIZE,
  SCREEN_PADDING_BOTTOM,
  SCREEN_PADDING_HORIZONTAL,
  SCREEN_PADDING_TOP,
  WIDTH,
} from '../Constants/GlobalStyles';
import Logo from '../Components/Logo';
import {PRIMARY, SECONDARY} from '../Constants/Colors';
import ScreenName from '../Components/ScreenName';
import {Email, Password} from '../Constants/Icons';
import CheckBoxComponent from '../Components/CheckBoxComponent';

export default class SignUpScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/screen_bg.png')}
        style={{
          paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
          paddingTop: SCREEN_PADDING_TOP,
          paddingBottom: SCREEN_PADDING_BOTTOM,
          width: WIDTH,
          height: HEIGHT,
        }}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              height: 130,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Logo />
          </View>
          <ScreenName text="Sign Up" />
          <View style={{marginVertical: 10}}>
            <InputComponent placeholder="Email" icon={Email} />
            <InputComponent
              placeholder="Password"
              icon={Password}
              secureTextEntry={true}
            />
            <InputComponent
              placeholder="Confirm Password"
              icon={Password}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 20,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <CheckBoxComponent />
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: NORMAL_FONT_SIZE,
                  color: PRIMARY,
                  textDecorationLine: 'underline',
                  marginHorizontal: 5,
                }}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
            <Text>&</Text>
            <TouchableOpacity style={{marginLeft: 40}}>
              <Text
                style={{
                  fontSize: NORMAL_FONT_SIZE,
                  color: PRIMARY,
                  textDecorationLine: 'underline',
                  marginHorizontal: 5,
                }}>
                Data privacy policy
              </Text>
            </TouchableOpacity>
          </View>
          <ButttonComponent
            text="Sign Up"
            varient="primary"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
          <Text
            style={{
              fontSize: NORMAL_FONT_SIZE,
              color: PRIMARY,
              textDecorationLine: 'underline',
              marginHorizontal: 5,
            }}>
            Or Sign Up With
          </Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}
