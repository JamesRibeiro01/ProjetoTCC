import React, { Component } from 'react';
import { Provider } from "react-redux";
import {createStore} from 'redux';

import Routes from "./Components/Routes";
import reducers from "./Reducers";
//import { Reducer } from 'react-native-router-flux';


export default class Main extends Component {

  render() {
    return (
      <Provider store = {createStore(reducers)}>
        <Routes />
      </Provider>
    );  
  }
}
