lampada = document.getElementById("lampada")
lampada.addEventListener("mouseenter", ligar)
lampada.addEventListener("mouseleave", desligar)

lampada2 = document.getElementById("lampada2")
lampada2.addEventListener("mouseenter", desligar1)
lampada2.addEventListener("mouseleave", ligar1)

function ligar() {
    lampada.setAttribute("src", "imagens/acesa.png")
}
function desligar() {
    lampada.setAttribute("src", "imagens/apagada.png")
}

function desligar1() {
    lampada2.setAttribute("src", "imagens/apagada1.png")
}
function ligar1() {
    lampada2.setAttribute("src", "imagens/acesa1.png")
}