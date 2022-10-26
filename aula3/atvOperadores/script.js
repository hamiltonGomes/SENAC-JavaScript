
function somar() {
    valor1 = document.getElementById('valor1')
    valor2 = document.getElementById('valor2')
    resultado = document.getElementsByTagName('p')[0]
    valor1Convertido = Number(valor1.value)
    valor2Convertido = Number(valor2.value)
    soma = valor1Convertido + valor2Convertido
    resultado.innerHTML = `Resultado: a soma dos valores é igual a <strong>${soma}</strong>.`
}

function subtrair() {
    valor3 = document.getElementById('valor3')
    valor4 = document.getElementById('valor4')
    resultado = document.getElementsByTagName('p')[1]
    valor3Convertido = Number(valor3.value)
    valor4Convertido = Number(valor4.value)
    subt = valor3Convertido - valor4Convertido
    resultado.innerHTML = `Resultado: a subtração dos valores é igual a <strong>${subt}</strong>.`
}

function multiplicacao() {
    valor5 = document.getElementById('valor5')
    valor6 = document.getElementById('valor6')
    resultado = document.getElementsByTagName('p')[2]
    valor5Convertido = Number(valor5.value)
    valor6Convertido = Number(valor6.value)
    multi = valor5Convertido * valor6Convertido
    resultado.innerHTML = `Resultado: a multiplicação dos valores é igual a <strong>${multi}</strong>.`
}

function divisao() {
    valor7 = document.getElementById('valor7')
    valor8 = document.getElementById('valor8')
    resultado = document.getElementsByTagName('p')[3]
    valor7Convertido = Number(valor7.value)
    valor8Convertido = Number(valor8.value)
    divi = valor7Convertido / valor8Convertido
    resultado.innerHTML = `Resultado: a divisão dos valores é igual a <strong>${divi}</strong>.`
}