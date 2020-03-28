import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    containerPrincipal:{
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#696969',
    },

    infoUsuario:{
        paddingTop: 650,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textoInfo:{
        //flex: 2,
        marginRight: 180, fontSize: 12, margin: 2
    },

    conteudoCentral:{
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeStyle;