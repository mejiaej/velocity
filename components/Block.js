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
  right,
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
    right && styles.right,
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
  right: {
    justifyContent: 'flex-end',
  },
});

export default Block;
