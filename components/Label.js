import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';

const Label = ({ style, color, blue, green, yellow, red, teal, purple, ...rest }) => {
  const labelStyles = [
    styles.label,
    color && { backgroundColor: color },
    blue && { backgroundColor: colors.blue },
    green && { backgroundColor: colors.green },
    yellow && { backgroundColor: colors.yellow },
    red && { backgroundColor: colors.red },
    teal && { backgroundColor: colors.teal },
    purple && { backgroundColor: colors.purple },
    style,
  ];
  return <View style={labelStyles} {...rest}></View>;
};

const styles = StyleSheet.create({
  label: {
    margin: 4,
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: colors.blue,
  },
});

export default Label;
