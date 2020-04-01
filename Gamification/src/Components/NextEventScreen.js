import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NextEventScreen extends Component {
    static navigationOptions ={
        drawerLabel: 'NextEventScreen',
      }

  render() {
    return (
      <View>
        <Text> NextEventScreen </Text>
      </View>
    );
  }
}
