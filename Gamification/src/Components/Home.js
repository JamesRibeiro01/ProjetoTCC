import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyle from ".././Styles/HomeStyle";
import { Actions } from "react-native-router-flux";
//import RouteScreens from "./RouteScreens";

export default class Home extends Component {


  render() {
    return (
      <View style={HomeStyle.containerPrincipal}>
        <View style={HomeStyle.containerHead}>
          <Text> Home </Text>
        </View>

        <View style={HomeStyle.LinhaView}></View>

        <View style={HomeStyle.containerBody}>
          <View style ={HomeStyle.infoPontos}>
          <Text> 1000</Text>
            <TouchableOpacity onPress = {()=>{Actions.HomePoints()}}>
            <Text>Aplicar pontos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={HomeStyle.LinhaView}></View>

        <View style={HomeStyle.containerFooter}>
          <Text style={HomeStyle.textoInfoUser}>Nome do Usuario: Thiago Batista </Text>
          <Text style={HomeStyle.textoInfoUser}>  Matricula do Usuario: 15221145623 </Text>
        </View>
      </View>
    );
  }
}


