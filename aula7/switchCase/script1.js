var print = document.getElementsByTagName('h2')[0]

function signo() {
    let date = document.getElementsByTagName('input')[0].valueAsDate
    let day = date.getUTCDate()
    let month = date.getUTCMonth() + 1

    switch (month) {
        case 1:
            if (day <= 20) {
                print.innerHTML = "Você é capricórnio.";
            } else if (day >= 21) {
                print.innerHTML = "Você é aquário.";
            }
        case 2:
            if (day <= 19) {
                print.innerHTML = "Você é aquário.";
            } else if (day >= 20) {
                print.innerHTML = "Você é peixes.";
            }
        case 3:
            if (day <= 20) {
                print.innerHTML = "Você é peixes.";
            } else if (day >= 21) {
                print.innerHTML = "Você é áries.";
            }
        case 4:
            if (day <= 20) {
                print.innerHTML = "Você é áries.";
            }
            else if (day >= 21) {
                print.innerHTML = "Você é touro.";
            }
            break
        case 5:
            if (day <= 20) {
                print.innerHTML = "Você é touro.";
            }
            else if (day >= 21) {
                print.innerHTML = "Você é gêmeos.";
            }
        case 6:
            if (day <= 20) {
                print.innerHTML = "Você é gêmeos.";
            }
            else if (day >= 21) {
                print.innerHTML = "Você é câncer.";
            }
        case 7:
            if (day <= 22) {
                print.innerHTML = "Você é câncer.";
            }
            else if (day >= 23) {
                print.innerHTML = "Você é leão.";
            }
        case 8:
            if (day <= 22) {
                print.innerHTML = "Você é leão.";
            }
            else if (day >= 23) {
                print.innerHTML = "Você é virgem.";
            }
        case 9:
            if (day <= 22) {
                print.innerHTML = "Você é virgem.";
            }
            else if (day >= 23) {
                print.innerHTML = "Você é libra.";
            }
        case 10:
            if (day <= 22) {
                print.innerHTML = "Você é libra.";
            }
            else if (day >= 23) {
                print.innerHTML = "Você é escorpião.";
            }
        case 11:
            if (day <= 21) {
                print.innerHTML = "Você é escorpião.";
            }
            else if (day >= 22) {
                print.innerHTML = "Você é sagitário.";
            }
        case 12:
            if (day <= 21) {
                print.innerHTML = "Você é sagitário.";
            }
            else if (day >= 22) {
                print.innerHTML = "Você é capricórnio.";
            }
    }
}
