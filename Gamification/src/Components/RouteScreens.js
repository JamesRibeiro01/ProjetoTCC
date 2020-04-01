import React, { Component } from 'react';
import { Text } from 'react-native';
import { Home, EventScreen, NextEventScreen, ActivityScreen } from "./AllScreens";
import { Router, Scene } from "react-native-router-flux";

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    )
}


export default class RouteScreens extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='tabbar' tabs tabBarStyle={{ backgroundColor: '#fff' }} />
                    <Scene key='OSU' title='OSU' icon={TabIcon}>
                        <Scene key = 'Home' component = {Home} title = 'Home' init hideNavBar/>
                        <Scene key = 'EventScreen' component = {EventScreen} title = 'EventScreen'  hideNavBar/>
                        <Scene key = 'NextEventScreen' component = {NextEventScreen} title = 'NextEventScreen'  hideNavBar/>
                        <Scene key = 'ActivityScreen' component = {ActivityScreen} title = 'ActivityScreen'  hideNavBar/>

                    </Scene>

                </Scene>

            </Router>

        );
    }
}
