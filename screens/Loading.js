import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loading = () => (
  <View style={styles.loading}>
    <Text> Loading </Text>
  </View>
);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
  },
});

export default Loading;
