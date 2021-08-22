import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {
  PLACEHOLDER_COLOR,
  PRIMARY,
  SECONDARY,
  WHITE,
} from '../Constants/Colors';
import {BORDER_RADIUS} from '../Constants/GlobalStyles';

export default class InputComponent extends Component {
  constructor() {
    super();
    this.state = {
      focus: false,
    };
  }
  render() {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 45,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: WHITE,
          borderRadius: BORDER_RADIUS,
          marginVertical: 10,
          borderWidth: this.state.focus ? 1 : 0,
          borderColor: PRIMARY,
          paddingLeft: 15,
        }}>
        {this.props.icon}
        <TextInput
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          placeholderTextColor={PLACEHOLDER_COLOR}
          style={{flex: 1, paddingHorizontal: 15, color: SECONDARY}}
          onFocus={() => {
            this.setState({
              focus: true,
            });
          }}
          onBlur={() => {
            this.setState({
              focus: false,
            });
          }}
        />
      </TouchableOpacity>
    );
  }
}
