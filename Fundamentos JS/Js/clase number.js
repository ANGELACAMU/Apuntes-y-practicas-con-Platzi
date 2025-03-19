// 1.Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)// esto nos va a decir que son de tipo number

// 2.Notacion cientifica
const cientifico = 5e3

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritméticas
// 1. Suma, resta, multiplicacion y division
const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 4 * 7
const division = 16 / 2

// 2.Modulo y exponenciacion
const modulo = 15 % 8 //nos sirve para saber si el numero es multiplo de otro
const exponenciacion = 2 ** 3

//Precision
const resultado = 0.1 + 0.2
console.log(resultado) // nos da un numero muy largo
console.log(resultado.toFixed(1)) //añadimos los valores que solo queremos despues del punto
console.log(resultado === 0.3) // esto nos comprueba si el valor del resultado es = a 0.3 a nivel de número y tipo

//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random() //nos saca un numero aleatorio

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)