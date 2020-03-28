import firebase from "firebase";

export const modificaNomeAluno = (novoNomeAluno) =>{
    return{
        type: 'modifica_nome_aluno',
        payload: novoNomeAluno
    }
}

export const modificaMatricula = (novaMatricula)=>{
    //console.log(novaMatricula)
    return{
        type: 'modifica_matricula',
        payload: novaMatricula
    }
}


export const modificaEmail = (novoEmail) =>{
    return{
        type: 'modifica_email',
        payload: novoEmail
    }
}


export const modificaSenha = (novaSenha) =>{
    return{
        type: 'modifica_senha',
        payload: novaSenha
    }
}



export const cadastraUsuarioAluno = ({nomeAluno, matricula, email, senha}) =>{
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(user => cadastroUsuarioSucesso()) //recuperando os dados do usuario cadastrado
    .catch(erro => cadastroUsuarioError(erro)) //erro caso de erro, function callback
    
}

const cadastroUsuarioSucesso = ()=>{
    console.log('Usuario cadastrado!');
    return{
        type: 'Sucesso'
    }
}

const cadastroUsuarioError = (erro)=>{
    console.log(erro)
    return{
        type: 'Cadastro'
    }
}