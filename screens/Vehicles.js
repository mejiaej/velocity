import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  vehicles: {
    flex: 1,
  },
});

class Vehicles extends Component {
  render() {
    return (
      <View style={styles.vehicles}>
        <Text> Vehicles </Text>
      </View>
    );
  }
}

export default Vehicles;
