import React, { Component } from "react";
import { TextInput, View, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import LoginStyle from "../Styles/LoginStyle";
import { connect } from "react-redux";
import { modificaNomeAluno, modificaMatricula, modificaEmail, modificaSenha, cadastraUsuarioAluno } from "../Actions/AutenticacaoActions";


class Cadastro extends Component {
    //Função interna do objeto
    _cadastraUsuarioAluno() {
        const nomeAluno = this.props.nomeAluno;
        const matricula = this.props.matricula;
        const email = this.props.email;
        const senha = this.props.senha;

        // const { nomeAluno, matricula, email, senha } = this.props;
       this.props.cadastraUsuarioAluno({ nomeAluno, matricula, email, senha });

    }
    render() {
        return (
            <KeyboardAvoidingView style={LoginStyle.containerPrincipal}>

                <View style={LoginStyle.containerTextInput}>

                    <TextInput style={LoginStyle.input}
                        placeholder="Nome do Aluno"
                        value={this.props.nomeAluno}
                        autoCorrect={false}
                        onChangeText={novoNomeAluno => { this.props.modificaNomeAluno(novoNomeAluno) }}
                    />

                    <TextInput style={LoginStyle.input}
                        placeholder="Matricula"
                        value={this.props.matricula}
                        autoCorrect={false}
                        keyboardType={'numeric'}
                        onChangeText={novaMatricula => { this.props.modificaMatricula(novaMatricula) }}
                    />

                    <TextInput style={LoginStyle.input}
                        placeholder="Email"
                        value={this.props.email}
                        autoCorrect={false}
                        onChangeText={novoEmail => { this.props.modificaEmail(novoEmail) }}
                    />


                    <TextInput style={LoginStyle.input}
                        placeholder="Senha"
                        value={this.props.senha}
                        autoCorrect={false}
                        onChangeText={novaSenha => { this.props.modificaSenha(novaSenha) }}
                        secureTextEntry
                    />

                    <Text style = {{color: '#ff0000', fontSize: 18}}>{this.props.errorCadastro}</Text>

                    <TouchableOpacity style={LoginStyle.btnSubmit} onPress={() => { this._cadastraUsuarioAluno() }}>
                        <Text style={LoginStyle.submitText} >Cadastrar</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        );
    }

};


const mapStateToProps = state => ({
    nomeAluno: state.AutenticacaoReducer.nomeAluno,
    matricula: state.AutenticacaoReducer.matricula,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,  
    errorCadastro: state.AutenticacaoReducer.errorCadastro 
});


export default connect(mapStateToProps, { modificaNomeAluno, modificaMatricula, modificaEmail, modificaSenha, cadastraUsuarioAluno })(Cadastro)