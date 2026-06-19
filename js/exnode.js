// Ref. ex8_5.js funções 

const prompt = require("prompt-sync")() 

const filmes = [] // Vetor global lista 

function titulo(texto) { // Recebe o texto que será exibido
    console.log()
    console.log(texto)
    console.log("=".repeat(40)) // Vai exibir 40 vezes o "="
}

// Programa principal 
do {
    titulo("===< Cadastro de Filmes >===")
    console.log("1. Inclusão do título do filme")
    console.log("2. Listagem dos filmes")
    console.log("3. Pesquisa pelo tipo de filme")
    console.log("4. Media e Destaque")
    console.log("5. Finalizar")

    const opcao = Number(prompt("Opção: ")) // Declara a opção como entrada

    // Cada opção seleciona uma função do programa
    if (opcao == 1) {
        incluir()
    } else if (opcao == 2) {
        listar()
    } else if (opcao == 3) {
        pesquisar()
    } else if (opcao == 4) {
        calcularMedia()
    }else if (opcao == 5 ) {
        break
    } else {
        console.log("Opção inválida. Tente novamente.")
    }

} while (true) // Faça enquanto for verdadeiro 

function incluir() { // Função responsável por incluir os dados 
    titulo("===< Inclusão de filmes no catálogo >===")

    const nomeFilme = prompt("Título do filme...: ") // Lê os dados do filme
    const genero = prompt("Genero...: ")
    const preco = Number(prompt("Preço R$: "))
    filmes.push({nomeFilme, genero, preco}) // Insere os dados no vetor filmes
    console.log("Ok! Filme Cadastrado com sucesso")
}

function listar() {
    titulo("===< Lista de filmes Cadastrados >===")
    console.log("Título........... Genero.......... Preço R$:")

    // Percorre o vetor pare exibir todos os filmes
    for (const filme of filmes) {
        console.log(`${filme.nomeFilme.padEnd(20)} ${filme.genero.padEnd(20)}` + `${filme.preco.toFixed(2).padStart(9)}`) 
        // preenche a string original com um determinado caractere, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido
    }
}

function pesquisar() {
    titulo("===< Pesquisar por tipo de filme >===")

    const pesq = prompt("genero do filme: ") // Lê o tipo de filme para pesquisar

    let contador = 0 // Contador para verificar se existe começa com zero
    console.log("Titulo.............Gênero.........Preço R$: ")

    for (const filme of filmes) {
        if (filme.genero.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${filme.nomeFilme.padEnd(20)} ${filme.genero.padEnd(20)}` + `${filme.preco.toFixed(2).padStart(9)}`)
            contador++ // Se entrou no if, incrementa o contador
        }
        
    }
    // Se percorreu todos os filmes e o contator continua == 0, significa que não há
        if (contador == 0) {
            console.log(`Obs.: Não há filmes cacastrados do tipo "${pesq}"`)
        }
}

function calcularMedia() {
    titulo("===< Média e Destaques do Cadastro de Filmes >===")

    const num = filmes.length // Obtém o numeros de elementos do vetor 
    if (num == 0) {
        console.log(`Obs. Não há filmes cadastrados`)
        return
    }

    let total = 0 // Para acumular o total  
    for (const filme of filmes) {
        total += filme.preco
    }

    const media = total / num // Calcula o preço média 

    const filmes2 = [...filmes] // Cria uma cópia da lista ou vetor original

    filmes2.sort((a, b)=> a.preco - b.preco) // Ordena pelo preco

    const menor = filmes2[0] // Menor preco é o primeiro (posição 0)
    const maior = filmes2[num-1] // Maior preço é o ultimo item da lista 

    console.log(`Preço Médio dos filmes R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.nomeFilme}`)
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.nomeFilme}`)
}