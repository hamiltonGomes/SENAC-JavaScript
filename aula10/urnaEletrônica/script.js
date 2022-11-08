function numeroDigitado(valor) {
    var valor1 = document.getElementsByTagName('input')[0].value
    var valor2 = document.getElementsByTagName('input')[1].value

    if (valor1 == "") {
        document.getElementsByTagName('input')[0].value = valor
    }
    else if (valor2 == "") {
        document.getElementsByTagName('input')[1].value = valor
    }
}

function corrigir() {
    document.getElementsByTagName('input')[0].value = ""
    document.getElementsByTagName('input')[1].value = ""
}

function votar() {
    var valor1 = parseInt(document.getElementsByTagName('input')[0].value)
    var valor2 = parseInt(document.getElementsByTagName('input')[1].value)
    var candidato = (valor1 * 10) + valor2
    if (sessionStorage.getItem(candidato) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato)) + 1
        sessionStorage.setItem(candidato, 1)
    }
    else {
        sessionStorage.setItem(candidato, 1)
    }
    alert("TRILILILIMMM!")
}

function resultado() {
    document.getElementById('resultado').innerHTML = ""
    for (i = 0; 1 < 100; i++) {
        if (sessionStorage.getItem(i) !== null) {
            document.getElementById('resultado').innerHTML += "Candidato " + i + " tem " + sessionStorage.getItem(i) + " votos. <br>"
        }
    }
}