const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form

    const nomeCompleto = frm.inNome.value.trim() // Obtém o conteúdo digitado // trim(): remove espaços em branco (no início e final)

    if(!nomeCompleto){
        alert("Digite um nome válido")
        frm.inNome.focus()
        return
    }

    inserirLinha(nomeCompleto) // Chama a função 

    frm.reset()// Limpa o campo de edição
    frm.inNome.focus()  // Joga o cursor nesse campo

})
    // Função para percorrer o nome completo e separar ele em cada linha 
const inserirLinha = (nomeCompleto) => {

    const cores = ["blue", "red", "yellow", "green", "orange", "chocolate", "deeppink", "purple", "violet", "aquamarine"]
    const partesNome = nomeCompleto.split(/\s+/) // a separação acontece nessa linha 

    for (const nome of partesNome) {
        const h3 = document.createElement("h3") // Cria o elemento html h3
        h3.textContent = nome
        dvQuadro.appendChild(h3)
        const corSorteada = Math.floor(Math.random()*10) // Pega as 10 cores e sorteia  
        h3.style.color = cores[corSorteada]
    }

}


