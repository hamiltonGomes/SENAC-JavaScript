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