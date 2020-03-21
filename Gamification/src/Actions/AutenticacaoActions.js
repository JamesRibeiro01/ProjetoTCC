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



