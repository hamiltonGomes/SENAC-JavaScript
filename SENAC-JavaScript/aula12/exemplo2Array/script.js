const fruits = ["Banana", "Laranja", "Maça"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits[fruits.length] = "Limão";
  document.getElementById("demo").innerHTML = fruits;
}

function myFunction1() {
  fruits[fruits.length] = "Abacate";
  document.getElementById("demo").innerHTML = fruits;
}

function myFunction2() {
  fruits[fruits.length] = "Melão";
  document.getElementById("demo").innerHTML = fruits;
}