import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import {NORMAL_FONT_SIZE} from '../Constants/GlobalStyles';

export default class CheckBoxComponent extends Component {
  render() {
    return (
      <BouncyCheckbox
        size={25}
        fillColor={PRIMARY}
        unfillColor={WHITE}
        text=" I agree to"
        textStyle={{
          color: SECONDARY,
          fontSize: NORMAL_FONT_SIZE,
          textDecorationLine: 'none',
        }}
        iconStyle={{borderColor: SECONDARY}}
        onPress={() => {}}
      />
    );
  }
}
