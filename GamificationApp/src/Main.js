import React, { Component, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Screens/MainTabScreen";
import EventScreen from "./Screens/EventScreen";
import HistoryInformation from "./Screens/HistoryInformation";
import ProfileScreen from "./Screens/ProfileScreen";
import HomeScreen from "./Screens/HomeScreen";
import { DrawerContent } from "./Screens/DrawerContent";
import RootStackScreen from "./Screens/RootStackScreen";
import reducers from "./Components/Reducers/index";
import firebase, { app } from "firebase";
import { AuthContext } from "./Components/Context";


const Drawer = createDrawerNavigator();


const App = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => ({
        signIn: () => {
            setUserToken('fgkj')
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken(null)
            setIsLoading(true);
        },
        signUp: () => {
            setUserToken('fgkj')
            setIsLoading(false);
        },
    }))
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken != null ? (
                    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                        <Drawer.Screen name="Home" component={MainTabScreen} />
                        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                        <Drawer.Screen name="EventScreen" component={EventScreen} />
                        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
                        <Drawer.Screen name="HistoryInformation" component={HistoryInformation} />
                    </Drawer.Navigator>
                ) :
                    <RootStackScreen />
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )

}

export default App;