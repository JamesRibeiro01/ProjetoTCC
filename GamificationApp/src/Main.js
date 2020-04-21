import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Screens/MainTabScreen";



const Drawer = createDrawerNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName = "Home">
                <Drawer.Screen name="Home" component={MainTabScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;