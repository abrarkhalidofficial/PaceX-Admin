import React from 'react';
import {View, Text} from 'react-native';
import {HEADING_FONT_SIZE} from '../Constants/GlobalStyles';
import {PRIMARY, SECONDARY} from '../Constants/Colors';

export default function ScreenName({text}) {
  return (
    <>
      <Text
        style={{
          fontSize: HEADING_FONT_SIZE,
          color: SECONDARY,
          fontWeight: '600',
        }}>
        {text}
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
    </>
  );
}
