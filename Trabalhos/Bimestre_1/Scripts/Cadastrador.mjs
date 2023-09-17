const alunos = [{
    nome: 'Leonardo Henrique Carrijo',
    ra: '1090482223007',
    idade: 20,
    sexo: 'M',
    media: 6,
    aprovado: true
},
{
    nome: 'Hugo Henrique Lourenço',
    ra: '1090482223033',
    idade: 20,
    sexo: 'M',
    media: 6,
    aprovado: false
},
{
    nome: 'Beatriz',
    ra: '1090482223015',
    idade: 23,
    sexo: 'F',
    media: 8,
    aprovado: true
},
{
    nome: 'Cubinha',
    ra: '1090482223023',
    idade: 28,
    sexo: 'M',
    media: 10,
    aprovado: true
},
{
    nome: 'Dimas',
    ra: '1090482223002',
    idade: 22,
    sexo: 'M',
    media: 8,
    aprovado: true
},
{
    nome: 'Isadora Helena',
    ra: '1090482223042',
    idade: 20,
    sexo: 'F',
    media: 9,
    aprovado: true
},
{
    nome: 'Erick',
    ra: '1090482223010',
    idade: 23,
    sexo: 'M',
    media: 4,
    aprovado: false
},
{
    nome: 'Felipe',
    ra: '1090482223021',
    idade: 24,
    sexo: 'M',
    media: 5,
    aprovado: false
}
]
let elementos = {
    nome: document.querySelector('input#nome'),
    ra: document.querySelector('input#ra'),
    idade: document.querySelector('input#idade'),
    sexoM: document.querySelector('input#mas'),
    media: document.querySelector('input#media'),
    aprovado: document.querySelector('input#aprovado'),
    divRes:  document.querySelector('div.resposta')
}

function EnviarDados() {
    let Aluno = {
        nome: elementos.nome.value,
        ra: elementos.ra.value,
        idade: elementos.idade.value,
        sexo: elementos.sexoM.checked ? 'M' : 'F',
        media: elementos.media.value,
        aprovado: elementos.aprovado.checked
    }
    Cadastrar(Aluno)
    alert(`Aluno ${alunos[alunos.length - 1].nome} Cadastrado!`)
}

function Cadastrar(aluno) { // Função que recebe um aluno e o inclui na lista
    alunos.push(aluno)
}

function PrintarAluno(vetor, i, cont){ // Criada com a única função de imprimir os alunos na tela para ser usada pela função de Gerar Relatórios
    console.log(`${cont}º Aluno:`)
    console.log(`   Nome: ${vetor[i].nome}`)
    console.log(`   RA: ${vetor[i].ra}`)
    console.log(`   Idade: ${vetor[i].idade}`)
    if(vetor[i].sexo == 'M'){
        console.log('   Masculino')
    }else{
        console.log('   Feminino')
    }
    console.log(`   Média: ${vetor[i].media}`)
    if(vetor[i].aprovado){
        console.log('   Aprovado\n')
    }else{
        console.log('   Reprovado\n')
    }
}