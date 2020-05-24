import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Suggestions from "./SugestoesEventos/Suggestions";
import Activities from "./Activities/Activities";
import MaterialCommunityIcons from "react-native-vector-i1cons/MaterialCommunityIcons";


export default function HomeScreen() {
    return (

        <View style={Wrapper.WrapperMain}>
            <ScrollView>
                <View style={Wrapper.WrapperHeader}>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} />
                    <View style={Wrapper.WrapperBalanceContainer}>
                        <Text style={Wrapper.WrapperBalanceTitle}>FAESA POINTS</Text>
                    </View>
                    <View style={Wrapper.WrapperBalanceTitle}>
                        <Text style={Wrapper.WrapperBalance}>FP: 1000</Text>
                    </View>
                </View>
            </ScrollView>

            <ScrollView horizontal>
                <Suggestions />
            </ScrollView>

          

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
