import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Main from "./Main";
import firebase from "firebase";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyCwxP7w_Pt6IoRdLGfbcPe_djhZxKiOL7g",
            authDomain: "projetotcc-89335.firebaseapp.com",
            databaseURL: "https://projetotcc-89335.firebaseio.com",
            projectId: "projetotcc-89335",
            storageBucket: "projetotcc-89335.appspot.com",
            messagingSenderId: "858709373444",
            appId: "1:858709373444:web:ee6ae14a17b906ae843b51",
            measurementId: "G-DTJPW4DW4L"
        };
        // Initialize Firebase
        //não remover essa condição
        //Erro sendo tratado aqui -> Firebase App named '[DEFAULT]' already exists (app/duplicate-app)
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }


    }

    render() {
        return (
            <Main />
        );
    }
}
