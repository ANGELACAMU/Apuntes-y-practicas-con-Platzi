//Si al hacer una funcion añadimos un typeof- despues de llamarla.. ejemplo:
// console.log (typeof suma)
//  nos dice que tipo de dato es (funcion) pero no quiere decir que las funciones dejen de ser objetos
//Al igual que los objetos las funciones tambien tienen propiedades, métodos, contexto de ejecución y también pueden ser invocadas

//Capacidades de las funciones = objetos
//1.Pasar funciones como argumentos -> callback

/*function a() { }
function b(a) { }
b(a)

// Retornar funciones

function a() { //declaracion de funcion
    function b() { }
    return b
}

// Asignar funciones a variables -> Expresión de función

const a = function () { }

// Tener propiedades y métodos 
function a() { }
const obj = {}
a.call(obj)

// Anidar funciones -> Nested function
function a() {
    function b() {
        function c() {

        }
        c()
    }
    b()
}
a()

// ¿Por lo tanto - Es posible almacenar funciones en objetos - ? -Sí
*/
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage() {
        console.log('🔥')

    }
}
//A ESTO SE LE CONOCE COMO MÉTODO

//Para visualizarlo
rocket.launchMessage()
