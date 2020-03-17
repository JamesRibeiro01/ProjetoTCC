import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    containerPrincipal:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#696969',
    },

    containerLogo:{
        flex: 1,
        justifyContent: 'center',
    },

    containerTextInput:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },

    input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },

    btnSubmit:{
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },

    submitText:{
        color: '#fff',
        fontSize: 18
    },

    btnRegister:{
        marginTop: 10,
    },

    registerText:{
        color: '#FFF'
    }

})


export default LoginStyle;