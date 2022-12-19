function parImpar() {
    informe = document.getElementsByTagName('p')[0]
    valor1 = document.getElementsByTagName('input')[0]
    valor1Convertido = Number(valor1.value)
        
    if (valor1Convertido%2 == 0) {
        informe.innerHTML = `O valor é par.`
    } else {
        informe.innerHTML = `O valor é ímpar.`
    }
    
}