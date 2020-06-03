import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Platform, StyleSheet, TextInput, StatusBar } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable"
import firebase from "firebase";


  class SignUpScreen extends Component {
      constructor(props){
        super(props);

        this.state = {
            UserName: 'x',
            UserID: '',
            userCourse: '',
            userEmail: '',
            userPassWord: ''
        }
      }

      _cadastroNovoUsuario(){
          let getUserName = this.state.userName;
          let getUserID = this.state.UserID;
          let getUserCourse = this.state.userCourse;
          let getUserEmail = this.state.userEmail;
          let getUserPassWord = this.state.userPassWord;

        firebase.auth()
                .createUserWithEmailAndPassword(getUserEmail, getUserPassWord)
                .then(user =>{alert('Usuario cadastrado com sucesso')})
                .catch(error =>{alert('ERROR')});

        firebase.database().ref('contatos').push({
            curso: getUserCourse,
            email: getUserEmail,
            matricula: getUserID,
            nome: getUserName
        })
                
      }
    render(){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor = '#003266' barStyle = 'light-content' />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Faça Seu Cadastro!</Text>
                </View>
                <View style={styles.footer} animation = "fadeInUpBig">
                    
                <Text style={styles.text_footer} >Nome</Text>
                    <View style={styles.action}>
                        <FontAwesome5
                            name="user"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput placeholder="Seu Nome"
                            style={styles.styleTextInput}
                            autoCapitalize="none"
                            onChangeText ={(newUserName) =>{this.setState({userName: newUserName})}}
                        />
    
                    </View>
                    
                    <Text style={styles.text_footer} >Matricula</Text>
                    <View style={styles.action}>
                        <FontAwesome5
                            name="user"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput placeholder="Matricula"
                            style={styles.styleTextInput}
                            autoCapitalize="none"
                            keyboardType = 'numeric'
                            onChangeText ={(newUserId) =>{this.setState({UserID: newUserId})}}
                    />
    
                    </View>
    
                    <Text style={styles.text_footer} >Curso</Text>
                    <View style={styles.action}>
                        <FontAwesome5
                            name="user"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput placeholder="Curso"
                            style={styles.styleTextInput}
                            autoCapitalize="none"
                            onChangeText ={(newUserCourse) =>{this.setState({userCourse: newUserCourse})}}
                             />
                    </View>
                    
                    
                    <Text style={styles.text_footer} >Email</Text>
                    <View style={styles.action}>
                        <FontAwesome5
                            name="user"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput placeholder="Email"
                            style={styles.styleTextInput}
                            autoCapitalize="none"
                            onChangeText ={(newUserEmail) =>{this.setState({userEmail: newUserEmail})}}
                         />
    
                    </View>
                    
                    <Text style={styles.text_footer}>Senha</Text>
    
    
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput placeholder="Senha"
                            secureTextEntry={true}
                            style={styles.styleTextInput}
                            autoCapitalize="none"
                            onChangeText ={(newUserPassWord) =>{this.setState({userPassWord: newUserPassWord})}}
                        />
           
                    </View>
                    <View style={styles.button}>
    
                        <TouchableOpacity onPress = {()=> this._cadastroNovoUsuario()}
                                           style = {[styles.signIn, {backgroundColor: '#002B64', 
                                                                    borderWidth: 1, 
                                                                    marginTop: 15}]}>
    
                            <Text style = {styles.textSign}>Criar Conta</Text>
    
                        </TouchableOpacity>
    
                    </View>
                </View>
            </View>
        );
    }
    
}


export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003266'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 9,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    styleTextInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        color: 'white'
    }
});