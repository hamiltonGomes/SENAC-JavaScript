var resultado = document.getElementsByTagName('p')[1]
var jogador = Number(document.getElementsByTagName('input')[0].value)
var input2 = document.getElementsByTagName('input')[1]
input2.addEventListener('click', sortear)
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
    var count = 0
    var jogador = Number(document.getElementsByTagName('input')[0].value)

    count++

    if (jogador == computador) {
        resultado.innerHTML += `Parabéns! Você descobriu o número. <br>`
    }
    else if (jogador > computador) {
        resultado.innerHTML += `O seu palpite é <b>maior</b> que o número sorteado. <br>`
    }
    else if (jogador < computador) {
        resultado.innerHTML += `O seu palpite é <b>menor</b> que o número sorteado. <br>`
    }
    else if (count === 3) {
        resultado.innerHTML += `Seus palpites acabaram, boa sorte da próxima vez! <br>`
    }
    else {
        resultado.innerHTML += `Valor informado é inválido. <br>`
    }
}
