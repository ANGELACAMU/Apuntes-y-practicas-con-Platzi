//Tipo de dato: string

let string1 = 'Hola, mundo'
let string2 = "JavaScript es genial"
let string3 = `${string1} feliz:)`
let string4 = string1 + ' ' + string2

console.log(string4) //nos mostrará la terminal : 'Hola, mundo (un espacio entre string1 y 2) JavaScript es genial

let frase = 'JavaScript es Extremadamente Genial'
console.log(frase.length) //Nos dirá la cantidad de caracteres de la frase incluyendo los espacios
console.log(frase.toLocaleLowerCase()) //nos muestra esta frase con todas las letras en minusculas
console.log(frase.toUpperCase()) //muestra todas en mayusculas

console.log(frase.substring(0, 10))
//el primer parametro nos dice donde empezamos a tomar la frase, el segundo donde queremos que termine