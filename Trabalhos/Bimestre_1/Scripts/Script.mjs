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
    tabelaRelatorio: document.querySelector('table.tabela__relatorio')
}

function OrdenarBubble(vetor, fnComp) { // Função que ordena o vetor passado com o BubbleSort
    let swap, passadas = 0, comparacoes = 0, trocas = 0
    do{
        swap = false
        passadas++
        for(let i = 0; i < vetor.length - 1; i++){
            comparacoes++
            if(fnComp(vetor[i], vetor[i + 1])){
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                swap = true
                trocas++
            }
        }
    }while(swap)
    console.log(`Passadas: ${passadas}\nComparações: ${comparacoes}\nTrocas: ${trocas}`)
}
function OrdenarPorRa(vetor){
    OrdenarBubble(vetor, (obj1, obj2) => obj1.ra < obj2.ra) // Ordena o vetor passado pelo ra de forma decrescente
}
function OrdenarPorNome(vetor){
    OrdenarBubble(vetor, (obj1, obj2) => obj1.nome > obj2.nome) // Ordena o vetor passado pelo nome de forma crescente
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
    GerarRelatorio(alunos, false)
}
function Cadastrar(aluno) { // Função que recebe um aluno e o inclui na lista
    alunos.push(aluno)
}
function GerarRelatorio(vetor, apenasAprovados){ // Função que gera os relatórios dos alunos
    elementos.tabelaRelatorio.innerHTML = ''
    GerarLinhaCabecalho()
    for(let i = 0; i < vetor.length; i++){
        if(!apenasAprovados){
            PrintarAluno(vetor, i)
        }else{
            if(alunos[i].aprovado){
                PrintarAluno(vetor, i)
            }
        }
    }
}
function PrintarAluno(vetor, i){
    let tabela = elementos.tabelaRelatorio
    const linha = document.createElement('tr')
    tabela.appendChild(linha)
    const nome = document.createElement('td')
    linha.appendChild(nome)
    nome.textContent = vetor[i].nome
    const ra = document.createElement('td')
    linha.appendChild(ra)
    ra.textContent = vetor[i].ra
    const sexo = document.createElement('td')
    linha.appendChild(sexo)
    sexo.textContent = vetor[i].sexo == 'M' ? 'Masculino' : 'Feminino'
    const media = document.createElement('td')
    linha.appendChild(media)
    media.textContent = vetor[i].media
    const aprovado = document.createElement('td')
    linha.appendChild(aprovado)
    aprovado.textContent = vetor[i].aprovado ? 'Aprovado' : 'Reprovado'
}
function GerarLinhaCabecalho(){
    const tabelaCabecalho = document.createElement('tr')
    elementos.tabelaRelatorio.appendChild(tabelaCabecalho)
    const nome = document.createElement('th')
    tabelaCabecalho.appendChild(nome)
    nome.textContent = "Nome do Aluno"
    const ra = document.createElement('th')
    tabelaCabecalho.appendChild(ra)
    ra.textContent = "RA"
    const sexo = document.createElement('th')
    tabelaCabecalho.appendChild(sexo)
    sexo.textContent = "Sexo"
    const media = document.createElement('th')
    tabelaCabecalho.appendChild(media)
    media.textContent = "Média"
    const aprovado = document.createElement('th')
    tabelaCabecalho.appendChild(aprovado)
    aprovado.textContent = "Resultado"
}