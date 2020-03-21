const INITIAL_STATE = {
    nomeAluno: 'Thiago Batista',
    matricula: '123',
    email: 'thiago@hotmail.com',
    senha: '123'
}

export default (state = INITIAL_STATE, action) =>{
    if(action.type == 'modifica_matricula'){
        return {...state, matricula: action.payload}
    }
    if(action.type == 'modifica_senha'){
        return{...state, senha: action.payload}
    }
    if(action.type == 'modifica_nome_aluno'){
        return{...state, nomeAluno: action.payload}
    }
    if(action.type == 'modifica_email'){
        return{...state, email: action.payload}
    }
    return state;
}   