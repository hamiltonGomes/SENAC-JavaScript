
function media() {
    var nota1 = document.getElementsByTagName('input')[0]
    var nota2 = document.getElementsByTagName('input')[1]
    var nota3 = document.getElementsByTagName('input')[2]
    var nota1Convertido = Number(nota1.value)
    var nota2Convertido = Number(nota2.value)
    var nota3Convertido = Number(nota3.value)
    resultado = document.getElementsByTagName('p')[3]
    var media = (nota1Convertido + nota2Convertido + nota3Convertido) / 3

    if (media > 6) {
        resultado.innerHTML = `Sua média é <b>${media.toFixed(2).replace(".", ",")}</b>. <br> Parabéns! Você foi aprovado.`
    }
    else {
        resultado.innerHTML = `Sua média é <b>${media.toFixed(1).replace(".", ",")}</b>. <br> Você foi reprovado.`
    }

}