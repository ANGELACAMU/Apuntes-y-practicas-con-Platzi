/*Método Slice
Toma solo una pequeña porción o una parte de un array
*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
//queremos fracciones de estos animales

console.log(animals.slice(2)) //nos mostrará solo desde la posición 2, es decir desde 'camel', seguido de 'duck' y 'elephant'

console.log(animals.slice(2, 4)) //posicion desde la 2 a la 4 porque no tiene el valor final incluido, sería 4-1 el 4 no lo incluye, 4 es el límite = nos lee solo 'camel' y 'duck'

console.log(animals.slice(1, 6)) //en este caso 'elephant' si está incluido, aunque también funcionaria con el número 5 porque elephant es la posición 4

console.log(animals.slice(-2)) //cuenta de atrás en adelante- resultado: 'duck','elephant'

console.log(animals.slice(2, -1))//si queremos empezar por un valor y terminar por alguno del final - resultado: 'camel', 'duck' //TENGO DUDAS DE ESTO//

console.log(animals.slice()) //nos devuelve el array original (0)

//conclusion: este metodo no nos modifica el array original, podemos hacer estos console.log por la immutabilidad