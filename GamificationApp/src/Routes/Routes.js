import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AboutScreen from "../Components/AboutScreen";
import EventScreen from "../Components/EventScreen";
import NextEvents from "../Components/NextEvents";
import PointScreen from "../Components/PointScreen";
import ProfileScreen from "../Components/ProfileScreen";
import HomeScreen from "../Components/HomeScreen";

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PointStack = createStackNavigator();
const NextEventStack = createStackNavigator();
const EventStack = createStackNavigator();
const AboutStack = createStackNavigator();

const Drawer = createDrawerNavigator();

//HOMESCREENSTACK
const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        </HomeStack.Navigator>
    );
};

const ProfileStackScreen = ({ navigation }) => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </ProfileStack.Navigator>
    );

};

const PointStackScreen = ({ navigation }) => {
    return (
        <PointStack.Navigator>
            <PointStack.Screen name="PointScreen" component={PointScreen} />
        </PointStack.Navigator>
    );

};

const NextEventStackScreen = ({ navigation }) => {
    return (
        <NextEventStack.Navigator>
            <NextEventStack.Screen name="NextEvents" component={NextEvents} />
        </NextEventStack.Navigator>
    );

};

const EventStackScreen = ({ navigation }) => {
    return (
        <EventStack.Navigator>
        <EventStack.Screen name="EventScreen" component={EventScreen} />
    </EventStack.Navigator>
    );

};

const AboutStackScreen = ({ navigation }) => {
    return (
        <AboutStack.Navigator>
        <AboutStack.Screen name="AboutScreen" component={AboutScreen} />
    </AboutStack.Navigator>
    );

};


const Routes = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Routes'>
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                <Drawer.Screen name="ProfileScreen" component={ProfileStackScreen} />
                <Drawer.Screen name="PointScreen" component={PointStackScreen} />
                <Drawer.Screen name="NextEvents" component={NextEventStackScreen} />
                <Drawer.Screen name="EventScreen" component={EventStackScreen} />
                <Drawer.Screen name="AboutScreen" component={AboutStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


export default Routes;