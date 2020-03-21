import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import firebase from "firebase";

import Routes from "./Components/Routes";
import reducers from "./Reducers/index";
//import { Reducer } from 'react-native-router-flux';


export default class Main extends Component {

  componentWillMount(){
    const firebaseConfig = {
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
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }
    
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
