import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Block = ({ flex, center, middle, style, children, color, ...rest }) => {
  const blockStyles = [
    styles.container,
    flex && { flex },
    center && styles.center, // cross axis
    middle && styles.middle, // main axis
    color && { backgroundColor: color },
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
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
});

export default Block;
