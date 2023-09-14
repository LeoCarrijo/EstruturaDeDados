// function Fatorar(valor){
//     if(valor == 1 || valor == 0){
//         return 1
//     }else{
//         let fat = valor
//         for(let i = valor - 1; i > 0; i--){
//             fat = fat * i
//         }
//         return fat
//     }
// }

function Fatorar(valor){
    if (valor <= 1) return 1
    return valor * Fatorar(valor - 1)
}

console.log(Fatorar(8))

let numeros = [77, 99, 11, 0, 22, 55, 33, 44, 66, 88]

function MergeSort(vetor){
    if(vetor.length == 1) return vetor

    let meio = Math.floor(vetor.length / 2)

    let vetorEsquerdo = vetor.slice(0, meio)
    let vetorDireito = vetor.slice(meio)

    console.log({vetorEsquerdo, vetorDireito})

    vetorEsquerdo = MergeSort(vetorEsquerdo)
    vetorDireito = MergeSort(vetorDireito)

    let vetorRes = []
    let posEsquerda = 0
    let posDireita = 0

    while(posEsquerda < vetorEsquerdo.length && posDireita < vetorDireito.length){
        if(vetorEsquerdo[posEsquerda < vetorDireito[posEsquerda]]){
            vetorRes.push(vetorEsquerdo[posEsquerda])
        }
    }
}

MergeSort(numeros)