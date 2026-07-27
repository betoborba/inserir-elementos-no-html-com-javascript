const frm = document.querySelector("form")
const dvNomes = document.querySelector("#divNome")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form

    const nome = frm.inNome.value // Obtém o conteúdo digitado 

    const h3 = document.createElement("h3") // Cria o elemento html h3
    const sobrenome = document.createTextNode(nome)

    h3.appendChild(sobrenome) // Define que o texto será filho de h3

    const  sobrenome = nome.split() // Separa os nomes

    if (!nome || nome < 0) {
        alert("Digite um nome válido")
        return
    }

    for (const nome of nomes) {
        const sobrenome = document.createElement("h3")
    }

})

