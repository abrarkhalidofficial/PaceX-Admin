import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import {BORDER_RADIUS, NORMAL_FONT_SIZE} from '../Constants/GlobalStyles';

export default class ButttonComponent extends Component {
  render() {
    if (this.props.varient === 'primary') {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            backgroundColor: PRIMARY,
            height: 45,
            width: '100%',
            borderRadius: BORDER_RADIUS,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: NORMAL_FONT_SIZE, color: WHITE}}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      );
    } else if (this.props.varient == 'secondary') {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            backgroundColor: SECONDARY,
            height: 45,
            width: '100%',
            borderRadius: BORDER_RADIUS,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: NORMAL_FONT_SIZE, color: WHITE}}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      );
    }
  }
}
