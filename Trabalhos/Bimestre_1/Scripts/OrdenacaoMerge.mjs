function OrdenarMerge(vetor){
    if(vetor.length == 1) return vetor

    let meio = Math.floor(vetor.length / 2)

    let vetorEsquerdo = vetor.slice(0, meio)
    let vetorDireito = vetor.slice(meio)

    console.log({vetorEsquerdo, vetorDireito})

    vetorEsquerdo = OrdenarMerge(vetorEsquerdo)
    vetorDireito = OrdenarMerge(vetorDireito)
    let menorValor = [], maiorValor = []
    if(vetorEsquerdo[0] <= vetorDireito[0]) {
        menorValor = vetorEsquerdo[0]
        maiorValor = vetorDireito[0]
    }else{
        menorValor = vetorDireito[0]
        maiorValor = vetorEsquerdo[0]
    }
    let vetorTotal = [menorValor, maiorValor]
    console.log(vetorTotal)
    return vetorTotal
}

let numeros = [99, 77, 11, 0, 22, 55, 33, 44, 66, 88]

OrdenarMerge(numeros)

// function imc(){
//     var sexo = ''
//     if(document.getElementById('inSexoM').value == true){
//         sexo = 'Masculino'
//     }else{
//         sexo = 'Feminino'
//     }
// }