a = document.getElementsByTagName("li")[3]
b = document.getElementsByTagName("li")[0]
c = document.getElementsByTagName("li")[1]
d = document.getElementsByTagName("li")[2]

a.addEventListener("mouseup", cima)
b.addEventListener("mousedown", baixo)
c.addEventListener("click", clicar)
d.addEventListener("mouseleave", sair)

function cima() {
    a.innerHTML = 'Subindoo'
    a.style.backgroundColor = 'pink'
}

function baixo () {
    b.innerHTML = '<b>Descendooo</b>'
    b.style.backgroundColor = 'green'
}

function clicar() {
    c.innerHTML = '<b>Tu clicou foi bença?!</b>'
    c.style.borderColor = 'blue'
}

function sair() {
    d.innerText = 'XAUUUUU'
    d.style.borderColor = 'red'
}