import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  analytics: {
    flex: 1,
  },
});

class Analytics extends Component {
  render() {
    return (
      <View style={styles.analytics}>
        <Text> Analytics </Text>
      </View>
    );
  }
}

export default Analytics;
