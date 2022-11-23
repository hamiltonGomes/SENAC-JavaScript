var resultado = document.getElementsByTagName('p')[1]
var jogador = Number(document.getElementsByTagName('input')[0].value)
var input2 = document.getElementsByTagName('input')[2]
var input3 = document.getElementsByTagName('input')[1]
input3.addEventListener('click', sortear)
input2.addEventListener('click', jogar)

var computador = 0

function sortear() {
    var min = 1
    var max = 11
    var dif = max - min
    var aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    var jogador = Number(document.getElementsByTagName('input')[0].value)

        if (jogador == computador) {
            resultado.innerHTML += `Parabéns! Você descobriu o número. <br>`
        }
        else if (jogador > computador) {
            resultado.innerHTML += `O seu palpite é <b>maior</b> que o número sorteado. <br>`
        }
        else if (jogador < computador) {
            resultado.innerHTML += `O seu palpite é <b>menor</b> que o número sorteado. <br>`
        }
        else {
            resultado.innerHTML += `Valor informado é inválido. <br>`
        }
}
