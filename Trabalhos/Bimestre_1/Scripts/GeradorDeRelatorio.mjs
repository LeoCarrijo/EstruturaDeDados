import { alunos } from '../Dados/alunos.mjs'
import { OrdenarBubble } from './OrdenadorBubble.mjs'

export function GerarRelatorio(vetor, apenasAprovados){ // Função que gera os relatórios dos alunos
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

export function PrintarAluno(vetor, i, cont){ // Criada com a única função de imprimir os alunos na tela para ser usada pela função de Gerar Relatórios
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