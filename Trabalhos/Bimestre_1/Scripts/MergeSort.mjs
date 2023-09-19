function MergeSort(vetor) {
    if(vetor.length <= 1) return vetor

    let meio = Math.floor(vetor.length / 2)
    let vetorEsquerdo = vetor.slice(0, meio)
    let vetorDireito = vetor.slice(meio)

    return Merge(MergeSort(vetorEsquerdo), MergeSort(vetorDireito))
}

function Merge(vetorEsquerdo, vetorDireito) {
    let vetorFinal = []
    let iEsquerdo = 0
    let iDireito = 0

    while(iEsquerdo < vetorEsquerdo.length && iDireito < vetorDireito){
        if(vetorEsquerdo[iEsquerdo] < vetorDireito[iDireito]){
            vetorFinal.push(vetorEsquerdo[iEsquerdo])
            iEsquerdo++
        }else{
            vetorFinal.push(vetorDireito[iDireito])
            iDireito++
        }
    }
    return vetorFinal.concat(vetorEsquerdo.slice(iEsquerdo), vetorDireito.slice(iDireito))
}

const vetor = [12, 11, 13, 5, 6, 7]
const vetorOrdenado = MergeSort(vetor)
console.log(vetorOrdenado)