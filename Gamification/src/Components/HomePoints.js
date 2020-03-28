import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeStyle from "../Styles/HomeStyle";

export default class HomePoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={HomeStyle.containerPrincipalHp}>
        <Text> HomePoints </Text>
      </View>
    );
  }
}
