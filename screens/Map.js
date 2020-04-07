import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

class Map extends Component {
  render() {
    return (
      <View style={styles.map}>
        <Text> Map </Text>
      </View>
    );
  }
}

export default Map;
