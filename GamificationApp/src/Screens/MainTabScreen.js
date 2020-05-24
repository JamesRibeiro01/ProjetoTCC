import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator, } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./HomeScreen";
import DetailedScreen from "./DetailedScreen";
import ProfileScreen from "./ProfileScreen";
import EventScreen from "./EventScreen";
import HistoryInformation from "./HistoryInformation";


const HomeStack = createStackNavigator();
const DetailedStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const EventStack = createStackNavigator();
const HistoryInformationStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
    >
        <Tab.Screen
            name="HomeStackScreen"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />

        <Tab.Screen
            name="EventStackScreen"
            component={EventStackScreen}
            options={{
                tabBarLabel: 'Eventos',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="ProfileScreen"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Perfil',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />

        <Tab.Screen
            name="HistoryInformationStackScreen"
            component={HistoryInformationStackScreen}
            options={{
                tabBarLabel: 'Historico',
                tabBarColor: 'black',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="history" color={color} size={26} />
                ),
            }}
        />


        <Tab.Screen
            name="DetailedStackScreen"
            component={DetailedStackScreen}
            options={{
                tabBarLabel: 'Ajustes',
                tabBarColor: 'gray',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="settings" color={color} size={26} />
                ),
            }}
        />

    </Tab.Navigator>
);


HistoryInformationStackScreen
export default MainTabScreen;

function HomeStackScreen({ navigation }) {
    return (
        <HomeScreen />
    );
}

function DetailedStackScreen({ navigation }) {
    return (
        <DetailedScreen />
    );
}

function ProfileStackScreen({ navigation }) {
    return (
        <ProfileScreen />
    );
};

function EventStackScreen({ navigation }) {
    return (
        <EventScreen />
    );

}


function HistoryInformationStackScreen({ navigation }) {
    return (
        <HistoryInformation />
    );
}

