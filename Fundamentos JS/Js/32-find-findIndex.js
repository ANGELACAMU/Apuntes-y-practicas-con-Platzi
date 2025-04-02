// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

/*FIND
nos devuelve el primer elemento que cumpla con una condicion que le mandemos en una funcion
*/
const multipleOf5 = [5, 10, 15, 20]

const firstNumberGraterThan10 = multipleOf5.find(number => number > 10)

console.log(multipleOf5) // el array
console.log(firstNumberGraterThan10) // resultado: 15

/*FIND INDEX
Va a tomar justamente el array y nos devuelve el indice del primer el elemento del array que tambien satisfaga esa condicion
*/

const randomNumber = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number > 50)//condicion

console.log(randomNumber) // el array original
console.log(indexNumber) // el index del primer elemento que cumple con la condicion de mayor de 50, es decir su index es 3, contando con que el array se lee la primera posición como 0