import { alunos } from "../Dados/alunos.mjs"

function Cadastrar(aluno) { // Função que recebe um aluno e o inclui na lista
    alunos.push({
        nome: aluno.nome,
        ra: aluno.ra,
        idade: aluno.idade,
        sexo: aluno.sexo,
        media: aluno.media,
        aprovado: aluno.aprovado
    })
}