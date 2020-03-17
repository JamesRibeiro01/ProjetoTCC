import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Home from './Home';

const MainNav = createStackNavigator(
    {
        Login:{
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Home:{
            screen: Home,
            navigationOptions:{
                headerTitle: 'Home'
            }
        }
    }
);

export default createAppContainer(MainNav); 
