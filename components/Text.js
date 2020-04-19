import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { sizes, fonts, colors } from '../constants/theme';

const Typography = ({
  center,
  right,
  color,
  size,
  height,
  weight,
  spacing,
  h1,
  h2,
  h3,
  h4,
  paragraph,
  caption,
  medium,
  bold,
  light,
  italic,
  button,
  style,
  children,
  ...rest
}) => {
  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    paragraph && styles.paragraph,
    paragraph && color === 'gray' && styles.paragraphGray,
    paragraph && color === 'gray2' && styles.paragraphGray2,
    paragraph && color === 'gray3' && styles.paragraphGray3,
    caption && styles.caption,
    caption && medium && styles.captionMedium,
    button && styles.button,
    color && { color },
    color && color === 'blue' && styles.blue,
    color && color === 'lightblue' && styles.lightblue,
    color && color === 'green' && styles.green,
    color && color === 'yellow' && styles.yellow,
    color && color === 'red' && styles.red,
    color && color === 'teal' && styles.teal,
    color && color === 'black' && styles.black,
    color && color === 'black2' && styles.black2,
    color && color === 'black3' && styles.black3,
    color && color === 'white' && styles.white,
    color && color === 'gray' && styles.gray,
    color && color === 'gray2' && styles.gray2,
    color && color === 'gray3' && styles.gray3,
    color && color === 'caption' && styles.caption,
    size && { fontSize: size },
    bold && styles.bold,
    light && styles.light,
    height && { lineHeight: height },
    weight && { fontWeight: weight },
    spacing && { letterSpacing: spacing },
    center && styles.center,
    right && styles.right,
    style,
  ];

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Rubik-Regular',
    fontSize: sizes.font,
    color: colors.black,
  },
  bold: { fontFamily: 'Rubik-Bold' },
  light: { fontFamily: 'Rubik-Light' },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  blue: { color: colors.blue },
  lightblue: { color: colors.lightblue },
  green: { color: colors.green },
  yellow: { color: colors.yellow },
  red: { color: colors.red },
  teal: { color: colors.teal },
  black: { color: colors.black },
  black2: { color: colors.black2 },
  black3: { color: colors.black3 },
  white: { color: colors.white },
  gray: { color: colors.gray },
  gray2: { color: colors.gray2 },
  gray3: { color: colors.gray3 },
  caption: { color: colors.caption },
  h1: fonts.h1,
  h2: fonts.h2,
  h3: fonts.h3,
  h4: fonts.h4,
  paragraph: fonts.paragraph,
  paragraphGray: fonts.paragraphGray,
  paragraphGray2: fonts.paragraphGray2,
  paragraphGray3: fonts.paragraphGray3,
  caption: fonts.caption,
  captionMedium: fonts.captionMedium,
  button: fonts.button,
});

export default Typography;
