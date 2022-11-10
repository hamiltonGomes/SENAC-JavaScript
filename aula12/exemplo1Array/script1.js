
function enviar() {
    var print = document.getElementById('print')
    var lista = []
    lista.push(inserir)
    while (lista.length < 10) {
        var inserir = document.getElementById('inserir').value
        print.innerHTML += `${lista} <br>`
    }

}

