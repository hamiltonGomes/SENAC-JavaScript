var print = document.getElementsByTagName('p')[0]

function signo() {
    let date = document.getElementsByTagName('input')[0].valueAsDate
    let day = date.getUTCDate()
    let month = date.getUTCMonth() + 1

    switch (month) {
        case 1:
            if (day <= 20) {
                print.innerHTML = "Você é do signo de <b>capricórnio.</b>";
            } else {
                print.innerHTML = "Você é do signo de <b>aquário.</b>";
            }
            break
        case 2:
            if (day <= 19) {
                print.innerHTML = "Você é do signo de <b>aquário.</b>";
            } else {
                print.innerHTML = "Você é do signo de <b>peixes.</b>";
            }
            break
        case 3:
            if (day <= 20) {
                print.innerHTML = "Você é do signo de <b>peixes.</b>";
            } else {
                print.innerHTML = "Você é do signo de <b>áries.</b>";
            }
            break
        case 4:
            if (day <= 20) {
                print.innerHTML = "Você é do signo de <b>áries.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>touro.</b>";
            }
            break
        case 5:
            if (day <= 20) {
                print.innerHTML = "Você é do signo de <b>touro.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>gêmeos.</b>";
            }
            break
        case 6:
            if (day <= 20) {
                print.innerHTML = "Você é do signo de <b>gêmeos.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>câncer.</b>";
            }
            break
        case 7:
            if (day <= 22) {
                print.innerHTML = "Você é do signo de <b>câncer.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>leão.</b>";
            }
            break
        case 8:
            if (day <= 22) {
                print.innerHTML = "Você é do signo de <b>leão.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>virgem.</b>";
            }
            break
        case 9:
            if (day <= 22) {
                print.innerHTML = "Você é do signo de <b>virgem.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>libra.</b>";
            }
            break
        case 10:
            if (day <= 22) {
                print.innerHTML = "Você é do signo de <b>libra.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>escorpião.</b>";
            }
            break
        case 11:
            if (day <= 21) {
                print.innerHTML = "Você é do signo de <b>escorpião.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>sagitário.</b>";
            }
            break
        case 12:
            if (day <= 21) {
                print.innerHTML = "Você é do signo de <b>sagitário.</b>";
            }
            else {
                print.innerHTML = "Você é do signo de <b>capricórnio.</b>";
            }
            break
    }
}
