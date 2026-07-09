const frm = document.querySelector("form") // Obtém os elementos da página
const dvMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () => {
    // Gera números aleatórios, entre 1 e 5 para cada moeda

    const num1_00 = Math.ceil(Math.random() * 5)    // Math.ceil() arredonda um valor para cima e math.random valor aleatório
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    // Define texto alternativo das imagens (acessibilidade)
    const alt1_00 = "Moedas de um Real"
    const alt0_50 = "Moedas de Cinquenta Centavos"
    const alt0_25 = "Moedas de Vinte e Cinco Centavos"
    const alt0_10 = "Moedas de Dez Centavos"

    // Chama a função criarMoedas passando os argumentos

    criarMoedas(num1_00, "1_00.png", alt1_00, "moeda1-00")
    criarMoedas(num0_50, "0_50.png", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.png", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.png", alt0_10, "moeda0-10")

})

const criarMoedas = (num, moeda, textoALt, classe) => { // Argumentos passados na ordem da chamada da função

    //Cria o laço de repetição para inserir várias imagens de moedas na página

    for (let i = 1; i <= num; i++) { 
        const novaMoeda = document.createElement("img") // Cria o elemento img
        novaMoeda.src = "img/" + moeda // Atributo src
        novaMoeda.textoALt = textoALt // Texto alternativo
        novaMoeda.className = classe // Classe da moeda(css)
        dvMoedas.appendChild(novaMoeda) // Hierarquia DOM 
    }

    const br = document.createElement("br") // Criar uma quebra de linha (br)
    dvMoedas.appendChild(br)

}

frm.addEventListener("submit",(e) => {
    e.preventDefault(); // Evita o envio do form

    const soma = Number(frm.inSoma.value) // Obtém o valor do usuário
    const moedas = dvMoedas.querySelectorAll("img") // Obtém img filhas de dvMoedas
    let totalMoedas = 0 // Declara e inicializa o contador

    // Percorre as tags img (em moedas) e verifica propriedade className
    for (const moeda of moedas) {
        if (moeda.className == "moeda1-00") {
            totalMoedas += 1 // Acumula 1 (para moedas de 1)
        } else if (moeda.className == "moeda0-50") {
            totalMoedas += 0.5  // Acumula 0.50 (para moedas de 0.50)
        } else if (moeda.className == "moeda0-25") {
            totalMoedas += 0.25 // Acumula 0.25 (para moedas de 0.25)
        } else {
            totalMoedas += 0.1 // Acumula 0.1 (para moedas de 0.10)
        }
    }

    const div = document.createElement("div") // Cria o elemento div 
    const h3 = document.createElement("h3") // Cria o elemento h3

    let mensagem // let porque a mensagem muda não existe um valor definido

    // Verifica se o valor inserido é igual ao total de Moedas exibido 

    if (soma == totalMoedas.toFixed(2)) {
        div.className = "alert alert-success" // Define a classe da div
        mensagem = "Parabéns! Você acertou!" // e mensagem a ser exibida
    } else {
        div.className = "alert alert-danger"
        mensagem = `Ops.. A resposta correta é ${totalMoedas.toFixed(2)}`
    }

    const texto = document.createTextNode(mensagem) // Cria elemento de texto

    h3.appendChild(texto) // Texto é filho de h3
    div.appendChild(h3) // h3 é filho da vida criada na function
    dvMoedas.appendChild(div) // Div com alerta é filha de dvMoedas

    frm.submit.disabled = true // Desabilita o botão (resposta já foi exibida)
})

frm.addEventListener("reset", () => {
    window.location.reload()
})

