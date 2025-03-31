//Mutability
/*
Para transformar el array original
con push añadimos otro valor al array, la sandía se sumaría a la lista de frutas

fruits.push('watermelon')
*/

// Inmutability

const fruits = ['apple', 'banana']
console.log(fruits)

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(newFruits)
//se mantiene el array original y el siguiente concatena nuevos añadidos


//Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

//esto nos muestra un booleano, en este caso en la consola nos aparece TRUE, para decirnos si es array o no

//PRACTICAL EXERCISE: sum all elements of an array.

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0
//vamos a hacer un FOR va a ser el mas efectivo por que nos va a ayudar a iterar con cada una de las posiciones:

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)
//El resultado es la suma de todos los números, nos da 15 en la consola.gracias a la propiedad length