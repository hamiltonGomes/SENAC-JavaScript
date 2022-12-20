
function contagem() {
    let contador = 0;
    let z = document.getElementById("numeroFinal").value

    while (contador < z) {
        document.getElementById("demo").innerHTML = 'Tendo em vista que o contador está iniciando em 0, está é a repetição nº ' + contador + ".";

        contador++;
    }
}

const cores = [
    'Verde',
    'Amarelo',
    'Azul',
    'Branco'
  ];
  
  let index = 0;
  
  while (index < cores.length) {
    document.getElementById("demo1").innerHTML = index, cores[index];
    index++;
  }
