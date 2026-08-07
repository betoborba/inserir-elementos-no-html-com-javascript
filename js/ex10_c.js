const frm = document.querySelector("form")
const dvTabela = document.querySelector("#divTabela")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()                          // Evita o envio do form

    const clube = frm.inClube.value             // Obtém o conteúdo dos campos
    const novoH5 = document.createElement("h5") // Cria o elemento no html h5

    novoH5.className = "text-end me-2"          // Indica o estilo do elemento
    novoH5.style.fontStyle = "italic"           // Aplica o estilo itálico a partir de .style

    const texto = document.createTextNode(clube)

    novoH5.appendChild(texto)                   // Define que o texto será filho de h5
    dvTabela.appendChild(novoH5)                // E que h5 será filho de dvTabela

    frm.inClube.value = "" 
    frm.inClube.focus()                         // Joga o cursor nesse campo

}) 

frm.btMontar.addEventListener("click", ()=> {

    const h5 = dvTabela.querySelectorAll("h5")  // Obtém as tags h5 da página e retorna um vetor 

    if (h5.length == 0 || h5.length % 2 == 1) {  // Se clubes estiver em zero ou não for multiplo de 2 
        alert("não há clubes para montar tabela deve ser par")
        return
    }

    const novoH3 = document.createElement("h3")
    const texto = document.createTextNode("Tabela de Jogos")
    novoH3.appendChild(texto) // Declara que texto será filho de h3 
    dvTabela.appendChild(novoH3) // Declara que h3 será filho de tabela 

    const novaTable = document.createElement("table")
    novaTable.className = "table table-striped"
    dvTabela.appendChild(novaTable) // Declara que novatable será filha de tabela 

    let linha

    // Percorre a lista de elementos h5 inseridos na página, ou seja, clubes
    for (let i = 0; i < h5.length; i++) {
        if (i % 2 == 0) {
            linha = novaTable.insertRow(-1) // Adiciona uma linha ao final da tabela 
            const col1 = linha.insertCell(0) // Cria colunas na linha inserida total de 3 colunas
            col1.textContent = h5[i].innerText
        } else {
             const col2 = linha.insertCell(1)
             col2.textContent = h5[i].innerText
        }
    }

    btMontar.disabled = true
})

frm.addEventListener("reset", () => { 
  location.reload()
})