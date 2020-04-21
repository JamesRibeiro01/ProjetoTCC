import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
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

const Tab = createMaterialBottomTabNavigator();


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

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWwight: 'bold'
        }
    }}>

        <HomeStack.Screen name="home" component={HomeScreen} options={{
            title: 'Home',
        }} />
    </HomeStack.Navigator>
);

const DetailedStackScreen = ({ navigation }) => (
    <DetailedStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'gray',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWwight: 'bold'
        }
    }}>

        <DetailedStack.Screen name="Ajustes" component={DetailedScreen} options={{

        }} />
    </DetailedStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWwight: 'bold'
        }
    }}>

        <ProfileStack.Screen name="Perfil" component={ProfileScreen} options={{

        }} />
    </ProfileStack.Navigator>
);

const EventStackScreen = ({ navigation }) => (
    <EventStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#d02860',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWwight: 'bold'
        }
    }}>

        <EventStack.Screen name="Eventos" component={EventScreen} options={{

        }} />
    </EventStack.Navigator>
);


const HistoryInformationStackScreen = ({ navigation }) => (
    <HistoryInformationStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWwight: 'bold'
        }
    }}>

        <HistoryInformationStack.Screen name="Historico" component={HistoryInformation} options={{

        }} />
    </HistoryInformationStack.Navigator>
);

