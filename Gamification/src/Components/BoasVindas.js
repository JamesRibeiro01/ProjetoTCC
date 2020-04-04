import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

const BoasVindasImg = require('../Images/BoasVindas.png')

export default BoasVindas => {
    return (
      <View style = {{flex: 1, padding: 15, backgroundColor: '#696969' }}>
        <View style = {{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{color: 'white', fontSize: 20}}>Seja Bem vindo</Text>
            <Image  source = {BoasVindasImg}/>
        </View>
        <View style = {{flex: 1}}>
            <Button title = "Fazer Login" onPress = {()=> Actions.Login()}/>
        </View>
      </View>
    );
}
