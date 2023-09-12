import { alunos } from '../Dados/alunos.mjs'

function OrdenarBubble(vetor, fnComp) { // Função que ordena o vetor passado com o BubbleSort
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

export function OrdenarPorRa(vetor){
    OrdenarBubble(vetor, (obj1, obj2) => obj1.ra < obj2.ra) // Ordena o vetor passado pelo ra de forma decrescente
}
export function OrdenarPorNome(vetor){
    OrdenarBubble(vetor, (obj1, obj2) => obj1.nome > obj2.nome) // Ordena o vetor passado pelo nome de forma crescente
}