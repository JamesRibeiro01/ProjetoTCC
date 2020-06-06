import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={EstiloHome.ContainerView}>
                <View style = {EstiloHome.containerText1}>
                    <Text style = {EstiloHome.estiloTexto}> Usuario: Thiago Batista </Text>
                </View>
                <View style = {EstiloHome.containerText2}>
                    <Text style = {EstiloHome.estiloTexto}> Matricula: 15110557 </Text>
                </View>

                <View style={EstiloHome.linha}></View>

                <View style={EstiloHome.circle}>
                    <Text style = {{backgroundColor: 'grey', 
                                    color: 'white', 
                                    textAlign: 'center'}}>
                          Pontos: 1000
                     </Text>
                     <TouchableOpacity>
                     <Text style = {{backgroundColor: 'grey', 
                                    color: 'white', 
                                    textAlign: 'center'}}>
                          Aplicar Pontos
                     </Text>
                     </TouchableOpacity>
                </View>

                <View style={EstiloHome.linha2}></View>
            </View>
        );
    }
}


const EstiloHome = StyleSheet.create({
    ContainerView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#003266'
    },

    containerText1: {
        paddingRight: 195,
        marginTop: 20,
        flexDirection: 'row'
    },


    containerText2:{
        paddingRight: 214,
        marginTop: 9,
        flexDirection: 'row'
    },

    linha:{
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        width: 420,
        backgroundColor: 'white'
    },

    linha2:{
        marginTop: 200,
        borderWidth: 1,
        borderRadius: 5,
        width: 420,
        backgroundColor: 'white'
    },

    circle:{
        marginTop: 200,
        marginHorizontal: 100,
        borderWidth: 100,
        borderRadius: 10,
        width: 420,
        borderColor: 'grey',
        backgroundColor: 'white'
    },

    estiloTexto:{
        color: 'white'
    }
});