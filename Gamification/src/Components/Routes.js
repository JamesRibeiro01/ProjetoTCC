import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from "react-native-router-flux";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Home from './Home';
import HomePoints from './HomePoints'


export default class Main extends Component {

  render() {
    return (
       <Router>
         <Scene key = 'root'>
         <Scene key = 'Login' component = {Login} initial title = 'GamificationFaesa' hideNavBar/>
         <Scene key = 'Cadastro' component = {Cadastro} title = 'Faça seu Cadastro'hideNavBar/>
         <Scene key = 'Home' component = {Home} title = 'Tela Home' hideNavBar/>
         <Scene key = 'HomePoints' component = {HomePoints} hideNavBar />
         </Scene>
         
       </Router>

    );
  }
}
