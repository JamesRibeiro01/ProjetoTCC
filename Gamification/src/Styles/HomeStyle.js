import { StyleSheet, Dimensions } from "react-native";

const HomeStyle = StyleSheet.create({

    //Estilos para a pagina de Home
    containerPrincipal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    containerHead: {
        flex: 1,
        height: 50, backgroundColor: '#696969'
    },

    containerBody: {
        flex: 7.5,
        height: 50, backgroundColor: '#696969'
    },

    containerFooter: {
        flex: 1,
        height: 100, backgroundColor: '#696969'
    },

    LinhaView: {
        flex: 0.01,
        backgroundColor: 'white'
    },
    textoInfoUser: {
        //flex: 2,
        marginRight: 180, fontSize: 12, margin: 2
    },

    infoPontos: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor: '#00BFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },


    //Estilos para a pagina HomePoints

    containerHomePoints: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    text: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        //margin: 12

    },

        textTitle:{
            color: 'white',
            fontSize: 17,
            textAlign: 'center'
        },  

    customButton: {

        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#0000FF'
    },

    containerBodyHP: {
        flex: 7.5,
        height: 50, backgroundColor: '#696969',
    },

    ContainertextOptions: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 40,

    }
});

export default HomeStyle;

