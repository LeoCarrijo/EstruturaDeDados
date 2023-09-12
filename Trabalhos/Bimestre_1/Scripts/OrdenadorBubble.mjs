import { alunos } from '../Dados/alunos.mjs'

export function OrdenarBubble(vetor, fnComp) {
    let swap
    do{
        swap = false
        for(let i = 0; i < vetor.length - 1; i++){
            if(fnComp(vetor[i], vetor[i + 1])){
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                swap = true
            }
        }
    }while(swap)
}

// console.log(alunos)
// OrdenarBubble(alunos, (obj1, obj2) => obj1.ra < obj2.ra)
// console.log(alunos)
// OrdenarBubble(alunos, (obj1, obj2) => obj1.nome > obj2.nome)
// console.log(alunos)