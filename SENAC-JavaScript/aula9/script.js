// VAR ---------------------------------------------------------------------------------------

// As variáveis de var podem ser atualizadas e podem ser declaradas novamente. 
// Pode ser declarada sem ser incializada.

/* var z
var z = 20
z = 30
console.log(z)

function vamos1() {
    console.log(z)
}
vamos1() */


// O var tem escopo global.
// A variável let e const tem escopo apenas dentro do bloco.

/* {
    var z
    z = 30
    console.log(z)
}

function vamos1() {
    console.log(z)
}
vamos1() */


/* {
    let f
    f = 30
    console.log(f)
}

function vamos2() {
    console.log(f)
}
vamos2()
 */

/* {
    let g
    g = 30
    console.log(g)
}

function vamos3() {
    console.log(g)
}
vamos3() */


// LET ---------------------------------------------------------------------------------------

// A variável let tem escopo apenas dentro do bloco.
// As variáveis declaradas com let dentro de blocos if ou for não podem ser acessadas de fora destes blocos.

/* if (0 == 0) {
    let c = 1
    console.log(c)
}
console.log(c) */


/* let x = 10

if (x==10){
    let z = 20
}

console.log(z) */


/* for(let i = 0; i <= 10; i++) {
    console.log(i)
}

console.log(i) */


// As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.
// Pode ser declarada sem ser incializada.

/* let c1
let c1 = 20
let c1 = 21
console.log(c1) */

/* var c2 = 25
var c2 = 30
console.log(c2)
 */


// CONST ---------------------------------------------------------------------------------------

// Const precisa ser inicializada e declarada.

/* const y */

// As variáveis de const não podem ser atualizadas nem declaradas novamente.

/* const y = 20
const y = 10
y = 21

console.log(y) */

//---------------------------------------------------------------------------------------

//hosting

/* console.log(x)
console.log(z)

var x = 10
let y = 20 */



/* let quantidade = 10

if (0==0) {
    let quantidade = 20
    console.log(quantidade) // 20
}

function vamos2() {
    console.log(quantidade) // 10
}

console.log(quantidade) // 10 */