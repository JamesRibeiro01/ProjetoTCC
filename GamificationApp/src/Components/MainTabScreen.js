import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
//import { Icon } from 'react-native-elements'
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AboutScreen from "./AboutScreen";
import EventScreen from "./EventScreen";
import NextEvents from "./NextEvents";
import PointScreen from "./PointScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";
import DrawerContent from "../Components/DrawerContent";


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PointStack = createStackNavigator();
const NextEventStack = createStackNavigator();
const EventStack = createStackNavigator();
const AboutStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MainTabScreen = ()=>(
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#e91e63"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileStack"
      component={ProfileStack}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
       <Tab.Screen
      name="PointScreen"
      component={PointScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="PointStack"
      component={PointStack}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

//HOMESCREENSTACK
const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions ={{
            headerStyle:{
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                marginLeft: 130
            }
        }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options = {{
                title: 'HomeScreen',
                headerLeft: ()=>{
                    <Icon.Button name = "Open-drawer" size = {25} backgroundColor = "009387" onPress = {()=>{
                        navigation.toggleDrawer();
                    }} ></Icon.Button>
                }
            }} />
        </HomeStack.Navigator>
    );
};

const ProfileStackScreen = ({ navigation }) => {
    return (
        <ProfileStack.Navigator screenOptions ={{
            headerStyle:{
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </ProfileStack.Navigator>
    );

};

const PointStackScreen = ({ navigation }) => {
    return (
        <PointStack.Navigator screenOptions ={{
            headerStyle:{
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <PointStack.Screen name="PointScreen" component={PointScreen} />
        </PointStack.Navigator>
    );

};

const NextEventStackScreen = ({ navigation }) => {
    return (
        <NextEventStack.Navigator screenOptions ={{
            headerStyle:{
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <NextEventStack.Screen name="NextEvents" component={NextEvents} />
        </NextEventStack.Navigator>
    );

};

const EventStackScreen = ({ navigation }) => {
    return (
        <EventStack.Navigator screenOptions ={{
            headerStyle:{
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
        <EventStack.Screen name="EventScreen" component={EventScreen} />
    </EventStack.Navigator>
    );

};

const AboutStackScreen = ({ navigation }) => {
    return (
        <AboutStack.Navigator screenOptions ={{
            headerStyle:{
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
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