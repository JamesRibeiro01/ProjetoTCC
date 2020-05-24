import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Activities(){
    return (
        <ScrollView>
            <View style = {Estilos.ContainerHeader}>

            </View>
        </ScrollView>
    );
}



const Estilos = StyleSheet.create({
    ContainerView:{
        
    },

    ContainerHeader:{
        height: 50,
        backgroundColor: 'red'
    }
});