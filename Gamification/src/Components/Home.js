import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeStyle from ".././Styles/HomeStyle";


export default class Home extends Component {


  render() {
    return (
      <View style={HomeStyle.containerPrincipal}>

        <View style = {HomeStyle.conteudoCentral}>
        <Text> Home </Text>
        </View>

        <View style={HomeStyle.infoUsuario}>
          <Text style={HomeStyle.textoInfo}>Nome do Usuario: Thiago Batista </Text>
          <Text style={HomeStyle.textoInfo}>  Matricula do Usuario: 15221145623 </Text>
        </View>
      </View>
    );
  }
}


