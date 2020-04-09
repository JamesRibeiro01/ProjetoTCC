import firebase from "firebase";
import {Actions} from 'react-native-router-flux';
import b64 from "base-64";

export const modificaNomeAluno = (novoNomeAluno) => {
    return {
        type: 'modifica_nome_aluno',
        payload: novoNomeAluno
    }
}

export const modificaMatricula = (novaMatricula) => {
    return {
        type: 'modifica_matricula',
        payload: novaMatricula
    }
}

export const modificaCurso = (novoCuro) => {
    return {
        type: 'modifica_curso',
        payload: novoCuro
    }
}


export const modificaEmail = (novoEmail) => {
    return {
        type: 'modifica_email',
        payload: novoEmail
    }
}


export const modificaSenha = (novaSenha) => {
    return {
        type: 'modifica_senha',
        payload: novaSenha
    }
}



export const cadastraUsuarioAluno = ({ nomeAluno, matricula, email, senha, curso }) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user =>{ 
                let emailB64 = b64.encode(email) //Convertendo o email para criptografica Base64
                
                firebase.database().ref('contatos/'+emailB64).push(
                    {nomeAluno: nomeAluno, 
                     matricula: matricula,
                     curso: curso,
                     senha: senha
                    }).then(value => cadastroUsuarioSucesso(dispatch) )
    
            })  //recuperando os dados do usuario cadastrado
            .catch(erro => cadastroUsuarioError(erro, dispatch)) //erro caso de erro, function callback


    }

}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'cadastro_usuario_sucesso' });
    Actions.BoasVindas();
}

const cadastroUsuarioError = (erro, dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
}