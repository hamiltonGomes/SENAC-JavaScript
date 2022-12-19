var itensVerao = Number(document.getElementById('totalVerao').value)
var carrinho = document.getElementById('carrinho')
var valorInverno = 0

function inverno() {
    var itensInverno = Number(document.getElementById('totalInverno').value)

    switch (itensInverno) {
        case 1:
            valorInverno = (60 * 1.25) + valorInverno + valorVerao
            break
        case 2:
            valorInverno = (80 * 1.25) + valorInverno + valorVerao
            break
        case 3:
            valorInverno = (50 * 1.25) + valorInverno + valorVerao
            break
        case 4:
            valorInverno = (70 * 1.25) + valorInverno + valorVerao
            break
        case 5:
            valorInverno = (80 * 1.25) + valorInverno + valorVerao
            break
    }
    carrinho.innerHTML = `O total do seu carrinho é de R$${valorInverno}`
}

var valorVerao = 0

function verao() {
    var itensVerao = Number(document.getElementById('totalVerao').value)

    switch (itensVerao) {
        case 1:
            valorVerao = (60 * 0.8) + valorVerao + valorInverno
            break
        case 2:
            valorVerao = (100 * 0.8) + valorVerao + valorInverno
            break
        case 3:
            valorVerao = (150 * 0.8) + valorVerao + valorInverno
            break
        case 4:
            valorVerao = (170 * 0.8) + valorVerao + valorInverno
            break
        case 5:
            valorVerao = (80 * 0.8) + valorVera + valorInverno
            break
    }
    carrinho.innerHTML = `O total do seu carrinho é de R$${valorVerao}`
}