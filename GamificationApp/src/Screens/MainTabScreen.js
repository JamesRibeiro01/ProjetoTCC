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
import BeneficiosList from "./BeneficiosList";



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
                tabBarLabel: 'Inicio',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="Inicio" color={color} size={26} />
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

    </Tab.Navigator>
);


export default MainTabScreen;

function HomeStackScreen({ navigation }) {
    return (
        <HomeScreen />
    );
}

function BeneficiosListScreen({navigation}){
    return(
        <BeneficiosList />
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

