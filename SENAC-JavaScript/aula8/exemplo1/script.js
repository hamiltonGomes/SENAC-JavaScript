var printSaldoIncial = document.getElementById('saldoAtual')

function saldo() {
    var saldoInicial = Number(document.getElementById('valorSaldoInicial').value)
    printSaldoIncial.innerHTML = `Seu saldo atual é de <b>R$ ${saldoInicial}</b>.`
}

var valorItens = 0

function comprar() {
    var itens = Number(document.getElementById('compras').value)
    var printValorItens = document.getElementById('total')

    switch (itens) {
        case 1:
            valorItens += 9;
            break
        case 2:
            valorItens += 7;
            break
        case 3:
            valorItens += 6;
            break
        case 4:
            valorItens += 20;
            break
        case 5:
            valorItens += 25;
            break
        case 6:
            valorItens += 5;
            break
        case 7:
            valorItens += 4;
            break
        case 8:
            valorItens += 4.5;
            break
        default:
            valorItens += 0;
            break
    }
    printValorItens.innerHTML = `Total: ${valorItens}.`
}

var finalizarCompra = document.getElementById('finalizar')
var printFinal = document.getElementById('saldoFinal')

function finalizar() {
    var saldoInicial = Number(document.getElementById('valorSaldoInicial').value)
    var valorFinal = saldoInicial - valorItens
    printFinal.innerHTML = `Itens comprados! Seu saldo final é de R$${valorFinal}.`
}