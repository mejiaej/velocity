import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants/theme';

const { width: windowWidth } = Dimensions.get('window');

const Typography = ({ style, full, opacity, children, ...rest }) => {
  const buttonStyles = [styles.button, full && styles.full, style];

  return (
    <TouchableOpacity activeOpacity={opacity} style={buttonStyles} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    height: 55,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  full: {
    width: windowWidth - 50,
  },
});

export default Typography;
