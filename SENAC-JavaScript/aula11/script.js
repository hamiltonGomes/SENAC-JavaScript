
function iniciar() {

    let inicial = Number(document.getElementsByTagName('input')[0].value)
    let final = Number(document.getElementsByTagName('input')[1].value)
    let printContagem = document.getElementsByTagName('p')[2]

    inicial = null
    final = null

    if (inicial == null || final == null) {
        printContagem.innerHTML = "Informe os dois valores para que seja possível efetuar a contagem."
    }
    else {
        do {
            printContagem.innerHTML += `${inicial} <br>`
            inicial++
        } while (inicial <= final)
    }
}




