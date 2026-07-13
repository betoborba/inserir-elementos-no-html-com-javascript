const frm = document.querySelector("form") // Obtém a informação do form
const tbFilmes = document.querySelector ("table") // Declara a obteção do table

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form

    const titulo = frm.inTitulo.value // Obtém o conteúdo dos campos
    const genero = frm.inGenero.value 

    inserirLinha(titulo, genero) // Chama a função que insere filmes na tabela
    gravarFilme(titulo, genero) // Chama a função que grava dados em localStorage

    frm.reset() // Limpa os campos do form
    frm.inTitulo.focus() // Posiciona o cursor em inTitulo 
})


const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1) // Adiciona uma linha na tabela -1 indica que a linha será inserida no final 

    const col1 = linha.insertCell(0) // Cria colunas na linha inserida total de 3 colunas
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo // Joga um conteúdo em cada célula
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>" // InnerHTML para que o simbolo seja renderizado 
}

const gravarFilme = (titulo, genero) => {
    // Se houver dados salvos em localStorage

    if (localStorage.getItem("filmesTitulo")) {
        // Obtém os dados e acrescenta ";" e o titulo/genero informado
        const filmesTitulo = localStorage.getItem("fimesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero

        localStorage.setItem("filmesTitulo", filmesTitulo) // Grava os dados
        localStorage.setItem("FilmesGenero", filmesGenero) // Em local Storage 
    } else {
        // Senão, é a primeira inclusão (salva sem delimitador)
        localStorage.setItem("filmesTitlo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
}

window.addEventListener("load", () => { // Ao carregar a página
    // Se houver dados salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
        // Obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
        const titulos = localStorage.getItem("filmesTitulo").split(";")
        const generos = localStorage.getItem("filmesGenero").split(";")

        // Percorre os elementos do vetor e os insere na tabela
        for (let i = 0; i < titulos.length; i++) {   // Para cada volta insere o na função linha o indice titulo e gênero 
            inserirLinha(titulos[i], generos[i])
        }
    }

});

tbFilmes.addEventListener("click", (e) => {
    // Se a classe do elemento alvo clicado contém exclui 
    if (e.target.classList.contains("exclui")) {
        // acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
            // Remove a linha da tabela, correspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove()

            localStorage.removeItem("filmesTitulo") // Exclui filmes salvos em...
            localStorage.removeItem("filmeGenero")  // localStorage

            // Salva novamente (se existir), acessando o conteúdo da tabela

            for (let i = 1; i < tbFilmes.rows.length; i++) {
                // Obtém o conteúdo da tabela (coluna 0: titulo; coluna 1: gênero)
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText
                const auxGenero = tbFilmes.rows[i].cells[1].innerText
                gravarFilme(auxTitulo, auxGenero) // Chama gravarFilme com dados da tabela 
            }
        }
    }
});