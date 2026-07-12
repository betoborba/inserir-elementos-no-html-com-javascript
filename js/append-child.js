const quadroAvisos = document.querySelector("#divQuadros")

function criar(texto) {
    const h3 = document.createElement("h3")

    h3.textContent = texto

    quadroAvisos.appendChild(h3)
}

criar("O sol nasce no horizonte")