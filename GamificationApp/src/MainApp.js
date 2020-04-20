import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Routes from "./Routes/Routes";

export default class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Routes />
        );
    }
}
