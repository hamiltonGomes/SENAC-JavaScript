/* num.push(7) // acrescenta um valor ao array
num [posiçao] = valorASerAtribuido //  tb acrescenta/substitui um valor ao array
num.length // comprimento do vetor
num.sort() // deixa os elementos em ordem 
num.indexOf() // busca o valor e apresenta a posição  */

function descubraCapitais() {
    var printCidade = document.getElementById("print")
    var input11 = document.getElementById('capitalInserir').value

    var capitais = ["Maranhão", "Teresina", "Fortaleza", "Natal", "João Pessoa", "Recife", "Maceió", "Aracaju", "Salvador"]

    var tentativa = capitais.find(input11)

    if (Array.includes(tentativa)) {
        printCidade.innerHTML = "Você acertou uma capital!" + tentativa
    }
    return
}

