import { alunos } from '../Dados/alunos.mjs'
import { OrdenarBubble } from './OrdenadorBubble.mjs'


export function GerarRelatorio(vetor){
    for(let i = 0; i < vetor.length; i++){
        console.log(`${i + 1}º Aluno:`)
        console.log(`   Nome: ${alunos[i].nome}`)
        console.log(`   RA: ${alunos[i].ra}`)
        console.log(`   Idade: ${alunos[i].idade}`)
        if(alunos[i].sexo == 'M'){
            console.log('   Masculino')
        }else{
            console.log('   Feminino')
        }
        console.log(`   Média: ${alunos[i].media}`)
        if(alunos[i].aprovado){
            console.log('   Aprovado\n')
        }else{
            console.log('   Reprovado\n')
        }
    }
}