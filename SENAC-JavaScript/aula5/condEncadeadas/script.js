var button = document.getElementsByTagName('input')[2]
button.addEventListener('click', faltas)

function faltas() {
    var input1 = document.getElementsByTagName('input')[0]
    var input2 = document.getElementsByTagName('input')[1]
    var valorInput1 = Number(input1.value)
    var valorInput2 = Number(input2.value)

    var resultado = document.getElementsByTagName('p')[1]

    if (valorInput1 > valorInput2) {
        resultado.innerHTML = `O número de faltas do primeiro semestre (${valorInput1}) é superior ao número de faltas do segundo semestre (${valorInput2}).`
    }
    else if (valorInput1 < 0 || valorInput2 < 0) {
        resultado.innerHTML = `Valor informado não é válido.`
    }
    else {
        if (valorInput2 > 75) {
            resultado.innerHTML = `O número de faltas do segundo semestre (${valorInput2}) é superior ao número de faltas do primeiro semestre (${valorInput1}) e maior que o número de faltas permitidas, portanto, o aluno está reprovado.`
        }
        else {
            resultado.innerHTML = `O número de faltas do segundo semestre (${valorInput2}) é superior ao número de faltas do primeiro semestre (${valorInput1})`
        }
    }
}