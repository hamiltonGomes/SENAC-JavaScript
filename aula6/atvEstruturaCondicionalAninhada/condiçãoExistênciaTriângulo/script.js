function discover() {
    let edge1 = Number(document.getElementsByTagName('input')[0].value)
    let edge2 = Number(document.getElementsByTagName('input')[1].value)
    let edge3 = Number(document.getElementsByTagName('input')[2].value)
    let print = document.getElementsByTagName('h2')[0]

    //CONDIÇÃO DE EXISTÊNCIA DE UM TRIÂNGULO:
    //      | b - c | < a < b + c
    //      | a - c | < b < a + c
    //      | a - b | < c < a + b


    let edge12 = edge1 - edge2
    if (edge12 < 0) {
        edge12 = edge12 * (-1)
    }
    let edge23 = edge2 - edge3
    if (edge23 < 0) {
        edge23 = edge23 * (-1)
    }
    let edge31 = edge3 - edge1
    if (edge31 < 0) {
        edge31 = edge31 * (-1)
    }

    if (edge1 <= 0 || edge2 <= 0 || edge3 <= 0) {
        print.innerHTML = "Valores inválidos. Por favor insira números maiores que 0."
    }
    else if (edge1 > 0 && edge2 > 0 && edge3 > 0) {
        if ((edge1 + edge2 > edge3 && edge3 > edge12) && (edge2 + edge3 > edge1 && edge1 > edge23) && (edge3 + edge1 > edge2 && edge2 > edge31)) {
            if (edge1 == edge2 && edge1 == edge3) {
                print.innerHTML = "Triângulo equilátero."
                print.style.color = "blue"
            }
            else if (edge1 != edge2 && edge1 != edge3 && edge2 != edge3) {
                print.innerHTML = "Triângulo escaleno."
                print.style.color = "red"
            }
            else {
                print.innerHTML = "Triângulo isóceles."
                print.style.color = "green"
            }
        }
        else {
            print.innerHTML = "Os dados informados não formam um triângulo."
        }
    }
}

function button() {
    let button1 = document.getElementsByTagName('input')[0]
    let button2 = document.getElementsByTagName('input')[1]
    let button3 = document.getElementsByTagName('input')[2]

    button1.style.transform = ''
}