import firebase from "firebase";

export const modificaNomeAluno = (novoNomeAluno) => {
    return {
        type: 'modifica_nome_aluno',
        payload: novoNomeAluno
    }
}

export const modificaMatricula = (novaMatricula) => {
    //console.log(novaMatricula)
    return {
        type: 'modifica_matricula',
        payload: novaMatricula
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



export const cadastraUsuarioAluno = ({ nomeAluno, matricula, email, senha }) => {
    return dispatch => {

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => cadastroUsuarioSucesso(dispatch)) //recuperando os dados do usuario cadastrado
            .catch(erro => cadastroUsuarioError(erro, dispatch)) //erro caso de erro, function callback


    }

}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'Sucesso' }
    )
}

const cadastroUsuarioError = (erro, dispatch) => {
    dispatch({ type: 'error' })
}