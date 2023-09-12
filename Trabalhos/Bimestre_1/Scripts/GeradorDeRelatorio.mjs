import { alunos } from '../Dados/alunos.mjs'
import { OrdenarBubble } from './OrdenadorBubble.mjs'


export function GerarRelatorio(vetor, apenasAprovados){
    let alunoCont = 1
    for(let i = 0; i < vetor.length; i++){
        if(!apenasAprovados){
            PrintarAluno(vetor, i, alunoCont)
            alunoCont++
        }else{
            if(alunos[i].aprovado){
                PrintarAluno(vetor, i, alunoCont)
                alunoCont++
            }
        }
    }
}

OrdenarBubble(alunos, (obj1, obj2) => obj1.nome > obj2.nome)
GerarRelatorio(alunos, true)

function PrintarAluno(vetor, i, cont){
    console.log(`${cont}º Aluno:`)
    console.log(`   Nome: ${vetor[i].nome}`)
    console.log(`   RA: ${vetor[i].ra}`)
    console.log(`   Idade: ${vetor[i].idade}`)
    if(vetor[i].sexo == 'M'){
        console.log('   Masculino')
    }else{
        console.log('   Feminino')
    }
    console.log(`   Média: ${vetor[i].media}`)
    if(vetor[i].aprovado){
        console.log('   Aprovado\n')
    }else{
        console.log('   Reprovado\n')
    }
}