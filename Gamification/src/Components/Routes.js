import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from "react-native-router-flux";
import Login from "./Login";
import Cadastro from "./Cadastro";


export default class Main extends Component {

  render() {
    return (
       <Router>
         <Scene key = 'root'>
         <Scene key = 'Login' component = {Login} initial title = 'GamificationFaesa'/>
         <Scene key = 'Cadastro' component = {Cadastro} title = 'Faça seu Cadastro'/>
         </Scene>
         
       </Router>

    );
  }
}
