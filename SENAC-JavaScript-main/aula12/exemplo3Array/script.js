function listaNormal() {
    const fruits = ["Banana", "Laranja", "Melão", "Manga", "Morango", "Abacate", "Tomate", "Uva", "Kiwi"];
    document.getElementById("demo1").innerHTML = "Lista normal: " + fruits;
}

function listaAlfabetica() {
    const fruits = ["Banana", "Laranja", "Melão", "Manga", "Morango", "Abacate", "Tomate", "Uva", "Kiwi"];
    fruits.sort();
    document.getElementById("demo2").innerHTML = "Lista em ordem alfabética: " + fruits
}