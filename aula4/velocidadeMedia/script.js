function velocidadeMedia() {
    var distância = document.getElementById('distância')
    var tempo = document.getElementById('tempo')
    var resultado = document.getElementsByTagName('p')[1]
    var distânciaConvertida = Number(distância.value)
    var tempoConvertido = Number(tempo.value)
    var velocidadeMedia = distânciaConvertida / tempoConvertido

    resultado.innerHTML = `Sua velocidade média é de <b>${velocidadeMedia} km/h</b>. <br>`

    if (velocidadeMedia > 80) {
        resultado.innerHTML += 'Você ultrapassou o limite de velocidade da via e foi <b>MULTADO!</b>'
    } else if (velocidadeMedia < 0 || velocidadeMedia < 40) {
        resultado.innerHTML += 'Você está dirigindo abaixo da metade da velocidade máxima da via e foi <b>MULTADO!</b>'
    } else {
        resultado.innerHTML += 'Sua velocidade média está correta. Siga seu percurso com segurança.'
    }

}