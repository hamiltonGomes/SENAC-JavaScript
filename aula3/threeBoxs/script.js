var body = document.getElementsByTagName('body')[0]
var pink1 = document.getElementsByClassName('button1')[0]
var yellow2 = document.getElementsByClassName('button2')[0]
var green3 = document.getElementsByClassName('button3')[0]

pink1.addEventListener('mouseenter', rosa)
pink1.addEventListener('mouseleave', black)
yellow2.addEventListener('mouseenter', amarelo)
yellow2.addEventListener('mouseleave', black)
green3.addEventListener('mouseenter', purple)
green3.addEventListener('mouseleave', black)

function black(){
    body.style.backgroundColor= 'black'
}
function rosa() {
    body.style.backgroundColor= 'pink'
}
function amarelo() {
    body.style.backgroundColor= 'yellow'
}
function purple() {
    body.style.backgroundColor= 'purple'
}