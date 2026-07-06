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

frm.btSelecionar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5") // Obtém as tags h5 da página queryselectorALL retorna um vetor

    if (tarefas.length == 0) {
        alert("não há tarefas para selecionar") // se não houver tarefas, exibe os alertas
        return // e retorna
    }

    let aux = -1  // variável auxiliar para indicar linha selecionada
    // Percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i = 0; i < tarefas.length; i++) { 
        // se tag é da class tarefa-selecionada (está selecionada)
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal" // troca para normal
            aux = i // Muda valor da variável auxiliar
            break // Sai da repetição 
        }
    }
    // Se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == tarefas.length - 1) {
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha 
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") // Obtém tags h5 da página

    let aux = -1 // Variável auxiliar para indicar a linha selecionada

    // Percorre a lista das tarefas inseridas na página (elemento h5)
    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") {
            aux = i // Muda o valor da variável aux
        }
    })

    if (aux == -1) { // Se não há tarefa selecionada (ou se a lista estiver vazia...)
        alert("Selecione uma tarefa para removê-la...")
        return 
    }
    // Solicita confirmação (exibindo o conteúdo da tag h5 selecionada)
    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux]) // Remove um dos filho de divQuadro
    }
})

frm.btGravar.addEventListener("click", () => { 

    const tarefas = document.querySelectorAll("h5") // Obtém tags h5 da página

    if (tarefas.length == 0) {
        alert("Não há tarefas para serem salvas") // Se não há tarefas
        return // retorna
    }

    let dados = "" // Irá acumular os dados a serem salvos
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";" // Acumula o conteúdo de cada h5
    })

    // grava os dados em localStorage, removendo o último ";"
    localStorage.setItem("tarefasDia", dados.slice(0,-1))

    // Confere se dados foram armazenados em localStorage
    if (localStorage.getItem("tarefaDia")) {
        alert("OK! Tarefas Salvas")
    }
})

window.addEventListener("load", () => {
    // Verifica se há tarefas salvas no navegador do usuário
    if (localStorage.getItem("tarefasDia")) {
        // cria um vetor com a lista de tarefas (separada pelo split(";"))
        const dados = localStorage.getItem("tarefasDia").split(";")

        // percorre os dados armazenados em localStorage
        dados.forEach(dado => {
            const h5 = document.createElement("h5") // Cria o elemento html h5
            const texto = document.createTextNode(dado) // Cria um texto
            h5.appendChild(texto) // Define que texto será um filho de h5
            dvQuadro.appendChild(h5) // e que h5 será filho de divQuadro
        })
    }
})