import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Block = ({
  flex,
  row,
  center,
  middle,
  style,
  children,
  color,
  space,
  ...rest
}) => {
  const blockStyles = [
    styles.container,
    flex && { flex },
    flex === 'disabled' && { flex: 0 },
    row && styles.row,
    center && styles.center, // cross axis
    middle && styles.middle, // main axis
    color && { backgroundColor: color },
    space && { justifyContent: `space-${space}` },
    style,
  ];
  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
});

export default Block;
