// Explicit type casting
const string = '42'
const integer = parseInt('string') //lo convierte en entero
console.log(integer) // nos da el dato 42
console.log(typeof integer) //nos convirtio de string a number

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)

//si queremos convertir a binario:
const binary = '1010'
const decimal = parseInt(binary, 2) //convierte binario a decimal
console - log(decimal)

// Implicit type casting
const sum = '5' + 3 //convierte el 3 en string y lo concatena
console.log(sum)// es decir el resultado es 53

const sumWithBoolean = '3' + true //vuelve a concatenar
console.log(sumWithBoolean) // resultado: 3true

const sumWithNumber = 2 + true // en este caso convierte true en un numero y los suma, ya no concatena
console.log(sumWithNumber) //resultado: 3

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue) // resultado: concatena
console.log(stringValue + numberValue) // resultado: concatena
console.log(stringValue + booleanValue) // resultado: concatena
console.log(numberValue + stringValue) // resultado: concatena
console.log(numberValue + numberValue) // resultado: suma
console.log(numberValue + booleanValue) // resultado: suma
console.log(booleanValue + stringValue) // resultado: concatenar
console.log(booleanValue + numberValue) // resultado: suma
console.log(booleanValue + booleanValue) // resultado: suma

//Si hay al menos un string, JavaScript concatena.
//Si no hay ningún string, JavaScript realiza una suma.