// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

//METODOS QUE NO MODIFICAN EL ARRAY ORIGINAL (filter y reduce)

/*FILTER
Tenemos un array, cada elemento va a pasar por una funcion, esta funcion debe ser a su vez una condición, si el elemento pasa la condición se creará un nuevo array con esos elementos que pasaron la condición
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0) // esto significa = si el modulo(%) de este numero (2) es igual a (0) ya sabemos que es un numero par

console.log(numbers) // numeros del array
console.log(evenNumbers) // sus numeros pares



/*REDUCE
Este método reduce el array a un solo valor.
*/

// -- CASE 1 -- //
const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0) //El metodo no funciona solo, tenemos que agregarle funciones, suele usar dos parámetros (acumulador) que es como si tuvieramos una variable externa donde guardamos cada uno de los datos y (currentValue) sería cada uno de los valores del array. Luego retornamos el acumulador y el currentValue. Adicional debemos colocarle otro valor, un inicial value que es 0.

console.log(numbersReduce) // nuestro array del 1 al 5
console.log(sum) // el valor reducido que es : 15


// -- CASE 2 -- //
//¿cuánto se repite una palabra en mi array?
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++//si existe le agregamos un valor más

    } else {
        accumulator[currentValue] = 1 //si no existe
    }
    return accumulator
}, {})
// ^ el valor inicial será un objeto vacío en este caso {}

console.log(wordFrecuency) // nos cuenta la frecuencia de cada una de las palabras: {apple: 1, banana: 2, hello: 1, bye: 3}

