import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import firebase, { app } from "firebase";

import Routes from "./Components/Routes";
import reducers from "./Reducers/index";
import ReduxThunk from "redux-thunk";

export default class Main extends Component {

  componentWillMount() {
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

    //não remover essa condição
    //Erro sendo tratado aqui -> Firebase App named '[DEFAULT]' already exists (app/duplicate-app)
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
