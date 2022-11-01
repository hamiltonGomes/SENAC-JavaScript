function compras() {

    let saldo = Number(document.getElementById('saldo').value)
    let printSaldo1 = document.getElementById('saldo1')

    let printDescription = document.getElementById('descricao')

    let numberOfChecked = $('input:checkbox:checked').length
    saldo = saldo - numberOfChecked

    if (saldo < 0) {
        printSaldo1.innerHTML = 'Você não possui fichas suficientes.'
    }
    else if (saldo > 0) {
        if (saldo >= 10) {
            printSaldo1.innerHTML = `Você possui ${saldo} fichas.`
            printDescription.innerHTML = 'Você tem muitas fichas!<br> Divirta-se!'
        }
        else if (saldo > 5 && saldo < 10) {
            printSaldo1.innerHTML = `Você possui ${saldo} fichas.`
            printDescription.innerHTML = 'Suas fichas estão acabando!<br> Escolha com sabedoria.'
        }
        else {
            printSaldo1.innerHTML = `Você possui ${saldo} fichas.`
            printDescription.innerHTML = 'Você tem poucas fichas. <br> Recarregue agora!'
        }
    }
    else {
        printSaldo1.innerHTML = `Você tem ${saldo} fichas.`
        printDescription.innerHTML = 'Recarregue no estabelecimento<br>mais próximo.'
    }
}