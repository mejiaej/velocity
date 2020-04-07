import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  settings: {
    flex: 1,
  },
});

class Settings extends Component {
  render() {
    return (
      <View style={styles.settings}>
        <Text> Settings </Text>
      </View>
    );
  }
}

export default Settings;
