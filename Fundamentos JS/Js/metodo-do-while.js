// Este método tambien nos ayuda con los ciclos, asegura que las cosas se vayan repitiendo, siempre que la condicion se cumpla, hasta conseguir el objetivo, similar a while, la diferencia es:

//Estructura

// do {
//  código
//} while (condicion)

let contador = 0;

do {
    console.log(contador)
    contador++;   //< de aquí para arriba es el código
} while (contador < 10) //< condicion que se valida

// DIFERENCIA PRINCIPAL :en un do while primero se ejecuta el CÓDIGO antes de validar la CONDICIÓN y en un while siempre se va a validar la CONDICIÓN antes de ejecutar el CÓDIGO.
