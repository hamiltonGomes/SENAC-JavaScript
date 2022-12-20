
function contagem() {
    let text = "";
    let i = 0;
    let z = document.getElementById("numeroFinal").value

    do {
        text += i + "<br>";
        i++;
    }
    while (i <= z);
    document.getElementById("demo").innerHTML = text;
}
