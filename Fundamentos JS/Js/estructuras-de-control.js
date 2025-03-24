//Ejecucion Condicional

if (let == algo) {
    código
} else {
    generar el código que no se cumplió
}

//En caso de añadir más condiciones

if (let == algo) {
    código
} else if {
    código
} else {

}

//OPERADORES (nos van a ayudar a validar lo que quiero de la estructura)
let nombre = "Diego"

if (nombre === "Diego") {
    console.log("Hola Diego");
}

//Si en el caso de que no sea diego queremos que saque algo más

let nombre = "Nico"

if (nombre === "Diego") {
    console.log("Hola Diego");
} else {
    console.log("Nombre no encontrado") //Saldrá en el caso del nombre que tratas de validar no existe
}

// Si quiero saludar tanto a Nico como a Diego:
let nombre = "Nico"

if (nombre === "Diego") {
    console.log("Hola Diego");
} else if (nombre === "Nico") { //si se cumple esta, entra la siguiente condición
    console.log("Hola Nico");
} else {
    console.log("Nombre no encontrado")
}
