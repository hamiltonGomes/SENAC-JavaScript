
function contagem() {

    let text = "";

    for (let i = 0; i <= 20; i++) {
        text += "The number is " + i + "<br>";
    }

    document.getElementById("demo").innerHTML = text;
}

contagem()