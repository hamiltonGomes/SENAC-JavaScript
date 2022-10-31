function discover() {
    let edge1 = Number(document.getElementsByTagName('input')[0].value)
    let edge2 = Number(document.getElementsByTagName('input')[1].value)
    let edge3 = Number(document.getElementsByTagName('input')[2].value)
    let print = document.getElementsByTagName('h2')[0]

    if (edge1 <= 0 || edge2 <= 0 || edge3 <= 0) {
        print.innerHTML = "Valores inválidos. Por favor insira números maiores que 0."
    }
    else if (edge1 > 0 && edge2 > 0 && edge3 > 0) {
        //ATUALIZAR CONDICIONAL DE EXISTêNCIA
        if ((edge1 + edge2 > edge3 && ed) && edge2 + edge3 > edge1 && edge3 + edge1 > edge2) {
            if (edge1 == edge2 && edge1 == edge3) {
                print.innerHTML = "Triângulo equilátero."
                print.style.color = "blue"
            }
            else if (edge1 != edge2 && edge1 != edge3 && edge2 != edge3) {
                print.innerHTML = "Triângulo escaleno."
                print.style.color = "red"
            }
            else {
                print.innerHTML = "Triângulo isóceles."
                print.style.color = "green"
            }
        }
        else {
            print.innerHTML = "Os dados informados não formam um triângulo."
        }
    }
}

function compras() {

    let saldo = Number(document.getElementById('saldo').value)
    let printSaldo1 = document.getElementById('saldo1')

    let printDescription = document.getElementById('descricao')

    var numberOfChecked = $('input:checkbox:checked').length
    saldo = saldo - numberOfChecked

    if (saldo < 0) {
        printSaldo1.innerHTML = 'Você não possui fichas suficientes.'
    }
    else if (saldo > 0) {
        if (saldo >= 10) {
            printSaldo1.innerHTML = `Seu saldo de fichas é de ${saldo}`
            printDescription.innerHTML = 'Você tem muitassss fichas! Boas compras!'
        }
        else if (saldo > 5 && saldo < 10) {
            printSaldo1.innerHTML = `Seu saldo de fichas é de ${saldo}`
            printDescription.innerHTML = 'Boas compras!'
        }
        else {
            printSaldo1.innerHTML = `Seu saldo de fichas é de ${saldo}`
            printDescription.innerHTML = 'Escolha o necessário.'
        }
    }
    else {
        printSaldo1.innerHTML = `Você tem ${saldo} fichas.`
        printDescription.innerHTML = 'Recarregue no estabelecimento mais próximo.'
    }
}