const frm = document.querySelector("form") // Obtém os elementos da página
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form

    const tarefa = frm.inTarefa.value //Obtém o conteúdo digitado

    const h5 = document.createElement("h5") // Cria o elemento html h5
    const texto = document.createTextNode(tarefa) // Cria o texto 
    h5.appendChild(texto) // Define que texto será filho de h5
    dvQuadro.appendChild(h5) // E que h5 será filho de dvQuadro
    
    frm.inTarefa.value = "" // Limpa o campo de edição
    frm.inTarefa.focus()   // Joga o cursor nesse campo
})

frm.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5") // Obtém as tags h5 da página queryselectorALL retorna um vetor

    if (tarefas.length == 0) 
        alert("não há tarefas para selecionar") // se não houver tarefas, exibe os alertas
    return // e retorna

    let aux = -1  // variável auxiliar para indicar linha selecionada


    // Percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i = 0; i < tarefas.length; i++) { 
        // se tag é da class tarefa-selecionada (está selecionada)
        if (tarefas[i].className == "tarefa selecionada") {
            tarefas[i].className = "tarefa-normal" // troca para normal
            aux = i // Muda valor da variável auxiliar
            break // Sai da repetição 
        }

    }

    // Se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == tarefas.length -1) {
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha 
})