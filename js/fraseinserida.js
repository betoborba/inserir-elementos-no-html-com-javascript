const quadroAvisos = document.querySelector("#divQuadros")
 


function criar(texto) {

const palavras1 = ["caminho", "objetivo", "alcançar", "levará", "atribuir" ,"legítimo"]
const palavras2 = ["não", "para", "abrir", "dar", "chegar", "fechar", "hoje", "amanhã"]
const palavras3 = ["permita", "sinta", "repare", "levante", "vire", "deixe", "respire"]


let combinacao1 = Math.floor(Math.random() * palavras1.length)
let combinacao2 = Math.floor(Math.random() * palavras2.length)
let combinacao3 = Math.floor(Math.random() * palavras3.length)

for (let i = 0; i < palavras1.length; i++){
}

const fraseDodia = palavras1[combinacao1] + " " + palavras2[combinacao2] + " " + palavras3[combinacao3]

const h3 = document.createElement("h3")

h3.textContent = fraseDodia

quadroAvisos.appendChild(h3)

console.log(fraseDodia)

}

criar()