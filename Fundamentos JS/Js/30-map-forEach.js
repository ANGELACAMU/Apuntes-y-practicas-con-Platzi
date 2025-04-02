// Methods that interate over an array
// Methods that DO NOT modify the original array (Immutability)

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)
//En este caso primero nos muestra en la consola que recorre cada elemento del array y luego nos muestra el array con su contenido, siendo el resultado es undefined, no te devuelve nada pero te devuelve cada uno de los valores


// EXERCISE: Farenheit to Celsius conversion

const temperaturesInFarenheit = [32, 68, 95, 104, 212]
//ahora convertimos a celsius
const temperaturesInCelsius = temperaturesInFarenheit.map(farenheit => (5 / 9) * (farenheit - 32))

console.log('Temperatures In Farenheit:', temperaturesInFarenheit)

console.log('Temperatures In Celsius:', temperaturesInCelsius)

/*RESULTADO:
Temperatures In Farenheit: (5) [32, 68, 95, 104, 212]
Temperatures In Celsius: (5)[0, 20, 35, 40, 100]

(MAP)- sucede algo en una funcion y nos arroja en cada una de las posiciones un valor diferente.
*/

//OTRO EJERCICIO - Crea un programa que tome los numeros de un array y calcula la suma de todos los elementos del array
//EXERCISE: sum of elements:
//el forEach nos permite tomar cada uno de los elementos y empezarlos a sumar.
//number es el valor del nuevo número que tengamos

const newNumbers = [1, 2, 3, 4, 5]
let sum = 0 //cero, porque aqui queremos almacenar el nuevo valor que necesitamos (la suma de todos los numeros)
newNumbers.forEach(number => {
    sum = sum + number //también sería correcto sum+= number
})

console.log('Array of Numbers:', newNumbers) //nos muestra los nº del array
console.log('Sum of Numbers', sum)// nos da el resultado de la suma = 15

