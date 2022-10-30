
//object

console.log({
    nome: hamilton,
    idade: 22,
    caminhar: function () {
        console.log("vamos caminhar!")
    }
})

//array

var x = [1, 2, 3]
var y = 3
y = "três"

console.log(typeof x)
console.log(typeof y)

//------------------------------------------------------------------------------------------

// let e const são locais e só funcionam no escopo que foram criados, diferentemente de var

// quando não declaramos o tipo da variável (var ou let) o JS irá procurar o momento que a variável foi mencionada e alterar o seu valor antigo, mesmo que esteja em escopos diferentes.

let x = 10
console.log(x)

{
    x = 20 // se eu colocasse let x = 20, esse dado só serviria dentro do escopo
    console.log(x)
}

console.log(x)

// conceitos chaves: hosting e escopo. 

// Hosting as declarações de variável e função são colocadas na memória durante a fase de compilação, o que permite que a função ou variável seja chamada antes de ser declarada.

// Escopo determina a visibilidade de alguma variável no JS.

//------------------------------------------------------------------------------------------

let numberOne = 30

if (numberOne === "30") {
    console.log('o tipo e o valor da variável são iguais.')
}
else {
    console.log('NumberOne é um número.')
}

//------------------------------------------------------------------------------------------

{
    let nome, age

    nome = "hamilton"
    age = 22
    isHuman = true

    if (isHuman === true) {
        isHuman = "humano"
    }

    console.log(nome, age, isHuman)

    console.log(`O meu nome é ${nome}, tenho ${age} e sou ${isHuman}.`)
}

console.log(isHuman)
console.log(age, nome)

//------------------------------------------------------------------------------------------

const pessoa1 = {
    name: "Hamilton",
    age: 22,
    weight: 55
}

console.log(pessoa1.weight)

//------------------------------------------------------------------------------------------

const pessoa1 = {
    name: "hamilton",
    age: 22
}

const pessoa2 = {
    name: "mayara",
    age: 22,
    cidade: null,
}

let pessoas = [pessoa1, pessoa2]

console.log(pessoas[1].age)

//------------------------------------------------------------------------------------------

{ let weight = 1 }
{ const weight = 2 }
var weight = 3

console.log(typeof weight)

console.log(weight)

let pessoa = {
    name: "mayara",
    age: 22,
    stars: 31.2,
    isSubscribed: true
}
console.log(`olá, meu nome é ${pessoa.name}, tenho ${pessoa.age} anos e ${pessoa.stars} estrelas.`)

let candidatos = [13, 22, 12, 45, 77]

console.log(candidatos[0])

//------------------------------------------------------------------------------------------
