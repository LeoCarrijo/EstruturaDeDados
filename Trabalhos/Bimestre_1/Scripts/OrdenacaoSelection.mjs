import { alunos } from "../Dados/alunos.mjs";

let passadas = 0, comparacoes = 0, trocas = 0

function OrdenarSelection(vetor, fnComp){
    for(let posSel = 0; posSel < vetor.length; posSel++){
        let posMenor = posSel + 1
        passadas++
        for(let i = posMenor + 1; i < vetor.length; i++) {
            comparacoes++
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
            }     
        }
        if(fnComp(vetor[posSel], vetor[posMenor])){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
            trocas++
        }
    }
}

let numeros = [77, 99, 11, 0, 22, 55, 33, 44, 66, 88]

OrdenarSelection(alunos, (obj1, obj2) => obj1.nome > obj2.nome)
console.log(alunos)
console.log(`Passadas: ${passadas}\nComparações: ${comparacoes}\nTrocas: ${trocas}`)