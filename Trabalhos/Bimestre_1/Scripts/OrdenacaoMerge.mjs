function OrdenarMerge(vetor){
    if(vetor.length == 1) return 1

    let meio = Math.floor(vetor.length / 2)

    let vetorEsquerdo = vetor.slice(0, meio)
    let vetorDireito = vetor.slice(meio)

    console.log({vetorEsquerdo, vetorDireito})

    vetorEsquerdo = OrdenarMerge(vetorEsquerdo)
    vetorDireito = OrdenarMerge(vetorDireito)
}

let numeros = [77, 99, 11, 0, 22, 55, 33, 44, 66, 88]

OrdenarMerge(numeros)