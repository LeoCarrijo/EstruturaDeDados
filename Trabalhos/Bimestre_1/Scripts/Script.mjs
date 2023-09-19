const alunos = [{ // Lista que armazena os alunos
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
    nome: 'Mateus Cuba',
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
    nome: 'Lucas de Paula Melo',
    ra: '1090482223042',
    idade: 20,
    sexo: 'M',
    media: 10,
    aprovado: true
},
{
    nome: 'Erick Ricardo',
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
},
{
    nome: 'Pedro Henrique Mota',
    ra:'1090482223001',
    idade: 19,
    sexo: 'M',
    media: 10,
    aprovado: true
}
]
let elementos = { // Objeto que armazena os elementos HTML
    nome: document.querySelector('input#nome'),
    ra: document.querySelector('input#ra'),
    idade: document.querySelector('input#idade'),
    sexoM: document.querySelector('input#mas'),
    media: document.querySelector('input#media'),
    aprovado: document.querySelector('input#aprovado'),
    tabelaRelatorio: document.querySelector('table.tabela__relatorio')
}

function OrdenarBubble(vetor, fnComp) { // Função que ordena o vetor passado com o BubbleSort e é usada para gerar todas as outras ordenações
    do{
        swap = false
        for(let i = 0; i < vetor.length - 1; i++){
            if(fnComp(vetor[i], vetor[i + 1])){
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                swap = true // Flag que basicamente fala ao programa "Caso eu trocar algo aqui, continue rodando, até que eu não troque nada (ou seja, "swap = false"), pois aí quer dizer que a lista já está ordenada
            }
        }
    }while(swap)
}
function OrdenarPorRa(vetor){ // Função que chama a função que ordena a lista e passa os parametros que ordenam o por RA decrescente e a função que printa a tabela na tela
    OrdenarBubble(vetor, (obj1, obj2) => obj1.ra < obj2.ra) // Ordena o vetor passado pelo ra de forma decrescente
    GerarRelatorio(alunos, false)
}
function OrdenarPorNome(vetor){ // Função que chama a função que ordena a lista e passa os parametros que ordenam o por nome crescente e a função que printa a tabela na tela
    OrdenarBubble(vetor, (obj1, obj2) => obj1.nome > obj2.nome) // Ordena o vetor passado pelo nome de forma crescente
    GerarRelatorio(alunos, false)
}
function OrdenarPorNomeAprovados(vetor) { // Função que chama a função que ordena a lista e passa os parametros que ordenam o por nome crescente e apenas os aprovados e a função que printa a tabela na tela
    OrdenarBubble(vetor, (obj1, obj2) => obj1.nome > obj2.nome)
    GerarRelatorio(alunos, true)
}
function EnviarDados() { // Função que é usada para enviar os dados para as outras funções do programa pelo botão "Cadastrar Aluno"
    let Aluno = { // Cria o objeto que vai ser adicionado à lista de alunos
        nome: elementos.nome.value,
        ra: elementos.ra.value,
        idade: elementos.idade.value,
        sexo: elementos.sexoM.checked ? 'M' : 'F',
        media: elementos.media.value,
        aprovado: elementos.aprovado.checked
    }
    Cadastrar(Aluno) // Chama a função que coloca o objeto na lista
    alert(`Aluno ${alunos[alunos.length - 1].nome} Cadastrado!`) // Da o feedback ao usuário de que o aluno foi cadastrado
    ResetarValores() // limpa os campos de Input
}
function Cadastrar(aluno) { // Função que recebe um aluno e o inclui na lista
    alunos.push(aluno)
}
function GerarRelatorio(vetor, apenasAprovados){ // Função que é utilizada para gerar todos os tipos de relatórios
    elementos.tabelaRelatorio.innerHTML = '' // Apaga a tabela existente para criar a nova tabela ordenada
    GerarLinhaCabecalho() // Chama a função que gera a linha de cabeçalho
    for(let i = 0; i < vetor.length; i++){ 
        if(!apenasAprovados){ // Verifica se foi colocado para todos os alunos forem mostrados ou apenas aprovados
            PrintarAluno(vetor, i)
        }else{ 
            if(alunos[i].aprovado){
                PrintarAluno(vetor, i)
            }
        }
    }
}
function PrintarAluno(vetor, i){ // Função usada pela Função "GerarRelatorio()" para criar as células do aluno adicionado à tabela no HTML
    let tabela = elementos.tabelaRelatorio // Cria uma variável local para o elemento da tabela
    const linha = document.createElement('tr') // Cria uma linha na tabela
    tabela.appendChild(linha) // Atrela essa linha na tebela
    const nome = document.createElement('td') // Cria a célula do valor do nome do aluno
    linha.appendChild(nome) // Atrela essa célula à linha que está atrelada à tabela
    nome.textContent = vetor[i].nome // Escreve o nome do aluno em questão na célula
    const ra = document.createElement('td') // Em seguida o código se repete para os outros atributos dos alunos na lista
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
function GerarLinhaCabecalho(){ // Função que faz quase a mesma coisa que a "PrintarAluno()" porém cria apenas a primeira linha da tabela
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
function ResetarValores(){ // Função que reseta os valores dos inputs para o valor padrão
    elementos.nome.value = ''
    elementos.ra.value = ''
    elementos.idade.value = ''
    elementos.sexoM.checked = true
    elementos.media.value = ''
    elementos.aprovado.checked = false
}