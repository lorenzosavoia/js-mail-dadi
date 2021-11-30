const input = document.querySelector("input");
const container = document.querySelector(".container");
const mails = ["lorenzo.savoia97@gmail.com", "ardi.savoia@hotmail.it", "thomas@tutor.it", "elisabetta@insegnante.it"]
const button = document.querySelector("button");
const remove = document.querySelector(".remove")
let cond = false;

remove.addEventListener("click", function () {
    container.innerHTML = "";
    input.value = "";
})



button.addEventListener("click", function () {
    if (input.value == "") {

        alert("Ricordati d'inserire la mail");

    } else {

        for (let i = 0; i < mails.length; i++) {
            if (mails[i] == input.value) {
                cond = true;
            }
        }

        if (cond == true) {
            container.innerHTML = "<h1> accesso effettuato </h1>"
        } else {
            container.innerHTML = "<h1> accesso negato </h1>"
        }
    }


})