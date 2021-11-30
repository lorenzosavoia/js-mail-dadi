const button = document.getElementById("button");
const testo = document.querySelector(".testo");
const number = document.querySelector(".number");

button.addEventListener("click", function () {
    const user = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;
    number.innerHTML = `user = ${user}  computer = ${computer}`;


    if (user > computer) {
        testo.innerHTML = "<h1> User Win </h1>";
    } else if (computer > user) {
        testo.innerHTML = "<h1> Computer Win </h1>";
    } else {
        testo.innerHTML = "<h1> Draw </h1>"
    }
 
})