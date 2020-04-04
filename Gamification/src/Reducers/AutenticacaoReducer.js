const INITIAL_STATE = {
    nomeAluno: '',
    matricula: '',
    email: '',
    senha: '',
    errorCadastro: ''
}

export default (state = INITIAL_STATE, action) => {
    if (action.type == 'modifica_matricula') {
        return { ...state, matricula: action.payload } //PayLoad carga de dados
    }   
    if (action.type == 'modifica_senha') {
        return { ...state, senha: action.payload }
    }
    if (action.type == 'modifica_nome_aluno') {
        return { ...state, nomeAluno: action.payload }
    }
    if (action.type == 'modifica_email') {
        return { ...state, email: action.payload }
    }
    if (action.type == 'cadastro_usuario_erro') {
        return { ...state, errorCadastro: action.payload }
    }
    if (action.type == 'cadastro_usuario_sucesso') {
        return { ...state, nome: '', senha: '' }
    }
    return state;
}   