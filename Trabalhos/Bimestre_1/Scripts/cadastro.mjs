import { alunos } from "../Dados/alunos.mjs"

function Cadastrar(aluno) {
    alunos.push({
        nome: aluno.nome,
        ra: aluno.ra,
        idade: aluno.idade,
        sexo: aluno.sexo,
        media: aluno.media,
        aprovado: aluno.aprovado
    })
}