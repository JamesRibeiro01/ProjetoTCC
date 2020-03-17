import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from "react-native-router-flux";
import Home from "./Components/Home";
import Login from "./Components/Login";


export default class Main extends Component {

  render() {
    return (
       <Router>
         <Scene key = 'root'>
         <Scene key = 'Login' component = {Login} initial/>
         <Scene key = 'Home' component = {Home} />
         </Scene>
         
       </Router>

    );
  }
}
