import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Screens/MainTabScreen";
import {DrawerContent}from "./Screens/DrawerContent";


const Drawer = createDrawerNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator  drawerContent = {props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={MainTabScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;