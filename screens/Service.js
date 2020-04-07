import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  service: {
    flex: 1,
  },
});

class Service extends Component {
  render() {
    return (
      <View style={styles.service}>
        <Text> Service </Text>
      </View>
    );
  }
}

export default Service;
