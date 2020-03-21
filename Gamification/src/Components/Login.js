import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Animated,
    Keyboard
} from "react-native";
import LoginStyle from "../Styles/LoginStyle";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { modificaMatricula, modificaSenha } from "../Actions/AutenticacaoActions";

const Logo = require('../Images/logo.png')
// const Logo2x = require('../Images/logo@2x.png') 
// const Logo3x = require('../Images/logo@3x.png')

const Login = props => {
    
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [opacity] = useState(new Animated.Value(0))
    const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }))

    useEffect(() => {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500
            })
        ]).start();
    }, [])


    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 55,
                duration: 100
            })
        ]),
            Animated.parallel([
                Animated.timing(logo.y, {
                    toValue: 65,
                    duration: 100
                })
            ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 130,
                duration: 100
            })
        ]),
            Animated.parallel([
                Animated.timing(logo.y, {
                    toValue: 155,
                    duration: 100
                })
            ]).start();
    }
    // console.log(props);
    return (
        <KeyboardAvoidingView style={LoginStyle.containerPrincipal}>

            <View style={LoginStyle.containerLogo}>
                <Animated.Image style={{ width: logo.x, height: logo.y }} source={Logo} />
            </View>

            <Animated.View style={[LoginStyle.containerTextInput,
            {
                opacity: opacity,
                transform: [{
                    translateY: offset.y
                }]
            }]}>


                <TextInput style={LoginStyle.input}
                    value={props.matricula}
                    placeholder="Matricula"
                    onChangeText={novaMatricula => { props.modificaMatricula(novaMatricula) }}
                    autoCorrect={false}
                    keyboardType={'numeric'}
                />

                <TextInput style={LoginStyle.input}
                    value={props.senha}
                    placeholder="Senha"
                    onChangeText={novaSenha => { props.modificaSenha(novaSenha) }}
                    autoCorrect={false}
                    secureTextEntry
                />

                <TouchableOpacity style={LoginStyle.btnSubmit} onPress={() => { false }}>
                    <Text style={LoginStyle.submitText} >Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={LoginStyle.btnRegister} onPress={() => { Actions.Cadastro(); }}>
                    <Text style={LoginStyle.registerText}>Criar Conta</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
};


const mapStateToProps = state => ({
    matricula: state.AutenticacaoReducer.matricula,
    senha: state.AutenticacaoReducer.senha
});


export default connect(mapStateToProps, { modificaMatricula, modificaSenha })(Login);