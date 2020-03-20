import React from "react";
import { TextInput, View, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import LoginStyle from "../Styles/LoginStyle";
import { connect } from "react-redux";
const Cadastro = props => (
    <KeyboardAvoidingView style={LoginStyle.containerPrincipal}>

        <View style={LoginStyle.containerTextInput}>

            <TextInput style={LoginStyle.input}
                placeholder="Nome do Aluno"
                value = {props.nomeAluno}
                autoCorrect={false}
                onChangeText={() => { }}
            />

            <TextInput style={LoginStyle.input}
                placeholder="Matricula"
                value = {props.matricula}
                autoCorrect={false}
                keyboardType = {'numeric'}
                onChangeText={() => { }}
            />

            <TextInput style={LoginStyle.input}
                placeholder="Email"
                value = {props.email}
                autoCorrect={false}
                onChangeText={() => { }}
            />


            <TextInput style={LoginStyle.input}
                placeholder="Senha"
                value = {props.senha}
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={() => { }}
            />

            <TouchableOpacity style={LoginStyle.btnSubmit} onPress={() => { false }}>
                <Text style={LoginStyle.submitText} >Acessar</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
);



const mapStateToProps = state => ({
    nomeAluno: state.AutenticacaoReducer.nomeAluno,
    matricula: state.AutenticacaoReducer.matricula,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
});


export default connect(mapStateToProps, null)(Cadastro)