// ARRAY: a parte de tener una variable y asignarle un valor, con los arrays podemos guardar muchos valores en una sola variable. [los arrays son objetos]

//How to create an Array ?

//1. new Array() or Array()

const fruits = Array('Apple', 'Banana', 'Orange')
console.log(fruits)

//MAL EJEMPLO >
const justOneNumber = Array(12)
console.log(justOneNumber)
//En este caso la consola nos muestra 12 posiciones vacias

//Buen ejemplo:
const Number = Array(1, 2, 3, 4, 5, 6)
console.log(Number)
//Nos apareceran los números dentro del array

//2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)
//array de un solo valor

const emptyArray = []
console.log(emptyArray)
//Array completamente vacío, nos sirve cuando queremos inicializar algún programa o que una variable tenga un array vacío y luego irlos llenando..

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)
//así también tenemos nuestro array con strings como el ejemplo primero de fruits

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milt', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)
//Array Mixto: strings, booleanos, numeros, objetos... podemos tener muchos valores asignados a una sola variable

//ACCESING ARRAYS ELEMENTS:

const firstFruit = fruits[0]
console.log(firstFruit)

//le colocamos la posicion[0] del valor al que queremos acceder, que sería Apple, el primer valor de ese Array

//LENGTH PROPERTY: para saber el tamaño del array:

const numberOfFruits = fruits.length
console.log(numberOfFruits)
//3, el numero de elementos que hay en el array