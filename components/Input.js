import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Text from './Text';
import { colors, fonts, sizes } from '../constants/theme';

const { width: windowWidth } = Dimensions.get('window');

const Input = ({
  label,
  rightComponent,
  email,
  phone,
  number,
  password,
  full,
  style,
  ...rest
}) => {
  const inputStyles = [styles.input, full && styles.full, style];

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text caption medium
        /* size={12}
          height={14}
          weight="bold"
          spacing={1.12}
          color="#B0BAC9"*/
          style={styles.label}
        >
          {label}
        </Text>
        {rightComponent}
      </View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={password}
        style={inputStyles}
        keyboardType={inputType}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.input,
    borderWidth: 0.5,
    borderColor: colors.border,
    borderRadius: 5,
    fontSize: sizes.font,
    color: colors.black,
    height: 45,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    textTransform: 'uppercase',
  },
  full: {
    width: windowWidth - 50,
  },
});

export default Input;
