const experiencia1 = document.querySelector("#experiencia1")
const button1 = document.querySelector("#leer-mas1")
const experiencia2 = document.querySelector("#experiencia2")
const button2 = document.querySelector("#leer-mas2")
const experiencia3 = document.querySelector("#experiencia3")
const button3 = document.querySelector("#leer-mas3")

button1.addEventListener("click",LeerMas1)
button2.addEventListener("click", LeerMas2)
button3.addEventListener("click", LeerMas3)

function LeerMas1() {
    if (experiencia1.className == "abierto") {
        experiencia1.className = " "
        button1.textContent = "Leer más"
    } else {
        experiencia1.className = "abierto"
        button1.textContent = "Leer menos"
    }
}

function LeerMas2() {
    if (experiencia2.className == "abierto") {
        experiencia2.className = " "
        button2.textContent = "Leer más"
    } else {
        experiencia2.className = "abierto"
        button2.textContent = "Leer menos"
    }
}

function LeerMas3() {
    if (experiencia3.className == "abierto") {
        experiencia3.className = " "
        button3.textContent = "Leer más"
    } else {
        experiencia3.className = "abierto"
        button3.textContent = "Leer menos"
    }
}