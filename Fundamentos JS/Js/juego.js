//Adivina el número secreto
const numeroSecreto = Math.floor(Math.random() * 10 + 1);
//este métdo nos ayuda a construir un numero de forma aleatoria, nosotros elegimos el rango (construye un nº aleatorio del 1 al 10) para delimitar el nº secreto que tenemos que adivinar

const numeroJugador = parseInt(prompt("Adivina el numero secreto entre el 1 y 10"));

console.log(`Este es el número con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("!Felicidades lo adivinaste¡")
} else if (numeroJugador < numeroSecreto) {
    console.log("El numero es demasiado bajo. intenta de nuevo")
} else {
    console.log("El numero es muy alto, intente de nuevo")
}