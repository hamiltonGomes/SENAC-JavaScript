function faça() {
  var nome1 = document.getElementById("nome").value
  document.getElementById("demo").innerHTML = "Seu nome é " + nome1 + ".";

  var quantidade = nome1.length;
  document.getElementById("demo1").innerHTML = "Seu nome possui " + quantidade + " letras.";

  var maiusculo = nome1.toUpperCase();
  document.getElementById("demo2").innerHTML = "Seu nome em maiúsculo fica: " + maiusculo + ".";

  var minusculo = nome1.toLowerCase();
  document.getElementById("demo3").innerHTML = "Seu nome em minúsculo fica: " + minusculo + ".";

}