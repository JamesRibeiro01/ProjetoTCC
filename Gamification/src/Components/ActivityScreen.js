import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ActivityScreen extends Component {
    static navigationOptions ={
        drawerLabel: 'ActivityScreen',
      }
  render() {
    return (
      <View>
        <Text> ActivityScreen </Text>
      </View>
    );
  }
}
