const frm = document.querySelector("form") // Obtém os elementos do formulário
const dvVelas = document.querySelector("#divVelas")
const btExibir = document.querySelector("#btExibir")

frm.addEventListener("submit", (e)=> {
    e.preventDefault(); // Evita o envio do form

    const idade = Number(frm.inIdade.value) // Obtém o valor do usuário
    
    const strIdade = idade.toString() // Retorna Idade para string
    
    if (!idade || idade < 0) {
        alert("Digite uma idade válida")
        return
    }

    // Remove imagens exibidads anteriormente
    dvVelas.innerHTML = ""

    for (const num of strIdade) {
        const img = document.createElement("img")

        img.src = `img/${num}.png`
        img.alt = `Vela com o número ${num}`
        // Adiciona uma classe CSS à imagem
        img.classList.add("vela")

        dvVelas.appendChild(img)
            
    }

    btExibir.disabled = true

})

frm.addEventListener("reset", () => {
    dvVelas.innerHTML = ""
    btExibir.disabled = false
})