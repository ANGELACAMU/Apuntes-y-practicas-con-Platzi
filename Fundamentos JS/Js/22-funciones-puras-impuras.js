//FUNCIONES PURAS
//Caracteristicas: dada una misma entrada siemre vamos a tener la misma salida
//No producen efectos secundarios



//Side Effects (efectos secundarios)>

//1.Modificar variables globales (todo lo que sea acceder a otras variables de nuestro código dentro de una funcion - esto hace que nuestra funcion NO SEA PURA)

//2.Modificar los parámetros de una función

//3.Solicitudes HTTP

//4.Imprimir mensajes en pantalla o en consola (console.log/alert)

//5.Manipulación del DOM

//6.Obtener la hora actual
//(NO SON MALOS SOLO HACEN QUE LAS FUNCIONES NO SEAN PURAS)

/*
function sum(a, b) {
    return a + b
}
*/

//Funciones impuras 
function sum(a, b) {
    console.log('A:', a)//(por imprimir)
    return a + b
}

//modificar variable global (impura) porque la modificamos
let total = 0

function sumWithSideEffect(a) {
    total = total + a // también podemos poner: total += a
    return total
}

//Funcion pura (misma entrada y salida)

function square(x) {
    return x * x
}

function addTen(y) {
    return y + 10
}


//Combinacion de dos funciones puras = sigue siendo pura
const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)