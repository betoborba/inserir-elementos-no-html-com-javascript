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

const criarMoedas = (num, moeda, textoALt, classe) => {

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