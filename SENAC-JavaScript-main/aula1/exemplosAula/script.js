/*  window.alert("olá")
confirm("está gostando?")
document.write("estou escrevendo na página.")
window.prompt("escreva seu nome: ") */

var nota1 = Number(prompt("escreva sua nota1: "))
var nota2 = Number(prompt("escreva sua nota2: "))
var soma = (nota1+nota2)
var media = (nota1 + nota2)/2
alert(`A soma entre ${nota1} e ${nota2} é igual a ${soma}. A média entre as notas é de ${media.toFixed(2).replace('.', ',')}.`)

// .toFixed(número de casas decimais)
// .replace('elemento que deseja substituir', 'elemento que deseja colocar no lugar')
// .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
// ${nome da variável}
// `` aspas para 

var nome = prompt("Qual é seu nome?")
document.write(`Olá <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`);
document.write(`Olá <strong>${nome}</strong>! Seu nome em letras maiúsculas: ${nome.toUpperCase()} <br>`);
document.write(`Olá <strong>${nome}</strong>! Seu nome em letras minúsculas: ${nome.toLowerCase()} <br>`);
document.write(`E sua média é ${media}.`)
