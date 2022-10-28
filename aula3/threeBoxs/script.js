var body = document.getElementsByTagName('body')[0]
var pink1 = document.getElementsByClassName('button1')[0]
var yellow2 = document.getElementsByClassName('button2')[0]
var green3 = document.getElementsByClassName('button3')[0]

pink1.addEventListener('click', rosa)
yellow2.addEventListener('click', amarelo)
green3.addEventListener('click', purple)

function rosa() {
    body.style.backgroundColor= 'pink'
}
function amarelo() {
    body.style.backgroundColor= 'yellow'
}
function purple() {
    body.style.backgroundColor= 'purple'
}