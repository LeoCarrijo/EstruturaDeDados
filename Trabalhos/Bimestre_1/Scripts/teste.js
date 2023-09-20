//Deve ter o inicio e fim
//inicio = 0 / fim = arr.length - 1
//meio = Math.floor((inicio + fim) / 2)

// function SelectionSort(vetor) {
//     for(let posSel = 0; posSel < vetor.length - 1; posSel++){
//         let posMenor = posSel + 1
//         for(let i = posMenor + 1; i < vetor.length; i++){
//             if(vetor[posMenor] > vetor[i]){
//                 posMenor = i
//             }
//         }
//         if(vetor[posMenor] > vetor[posSel]){
//             [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
//         }
//     }
// }

function SelectionSort(vetor){
    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
            }
        }
        if(vetor[posSel] > vetor[posMenor]){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
        }
    }
}

function BuscaBinaria(vetor, valor) {
    let inicio = 0
    let fim = vetor.length - 1
    while(fim >= inicio){
        let meio = Math.floor((inicio + fim) / 2)
        if(vetor[meio] === valor){
            return meio
        }else if(vetor[meio] < valor){
            inicio = meio + 1
        }else{
            fim = meio - 1
        }
    }
    return -1
}

function BuscaSequencial(vetor, valorBuscado) {
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBuscado) return i
    }
}

let vetor = [11, 33, 22, 88, 44, 66, 55, 77, 99]
SelectionSort(vetor)
console.log(vetor)
let valorBuscado = 66
console.log(`Posição do ${valorBuscado}: ${BuscaBinaria(vetor, valorBuscado)}`)