import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Suggestions from "./SugestoesEventos/Suggestions";
import Activities from "./Activities/Activities";


export default function HomeScreen() {
    return (

        <View style={Wrapper.WrapperMain}>

                <View style={Wrapper.WrapperHeader}>
                    <View style={Wrapper.WrapperBalanceContainer}>
                        <Text style={Wrapper.WrapperBalanceTitle}>FAESA POINTS</Text>
                    </View>
                    <View style={Wrapper.WrapperBalanceTitle}>
                        <Text style={Wrapper.WrapperBalance}>FP: 1000</Text>
                    </View>
                </View>
            <View>
                <Suggestions />
                <Activities />
            </View>
        </View>

    )
}


const Wrapper = StyleSheet.create({
    WrapperMain: {
        flex: 1
    },

    WrapperHeader: {
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    WrapperBalanceContainer: {

    },

    WrapperBalanceTitle: {
        fontSize: 14,
        textAlign: 'center',
    },

    WrapperBalance: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },


});
