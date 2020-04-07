import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overview: {
    flex: 1,
  },
});

class Overview extends Component {
  render() {
    return (
      <View style={styles.overview}>
        <Text> Overview </Text>
      </View>
    );
  }
}

export default Overview;
