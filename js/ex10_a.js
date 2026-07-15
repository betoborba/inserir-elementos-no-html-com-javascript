const frm = document.querySelector("form") // Obtém os elementos do formulário
const dvVelas = document.querySelector("#divVelas")


const idade = Number(frm.inIdade.value)


//chama a funçao criarVelas
criarVelas(num0, "0.png", alt_0, "vela-0")
criarVelas(num1, "1.png", alt_1, "vela-1")
criarVelas(num2, "2.png", alt_2, "vela-2")
criarVelas(num3, "3.png", alt_3, "vela-3")
criarVelas(num4, "4.png", alt_4, "vela-4")
criarVelas(num5, "5.png", alt_5, "vela-5")
criarVelas(num6, "6.png", alt_2, "vela-6")
criarVelas(num7, "7.png", alt_7, "vela-7")
criarVelas(num8, "8.png", alt_8, "vela-8")
criarVelas(num2, "9.png", alt_9, "vela-9")

// Função para a saída da imagens
const criarVelas = (num, textoAlt, img, classe) => {

for (let i = 1; i <= num; i++)
const vela = document.creatElement("img")
vela.src = "img/" + textoAlt
vela.textoAlt = textoAlt
vela.className = classe
dvVelas.appendChild(vela)

}
