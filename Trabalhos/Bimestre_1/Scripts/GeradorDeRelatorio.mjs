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

