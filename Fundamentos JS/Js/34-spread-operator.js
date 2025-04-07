// 1. Copying an Array

//Si queremos hacer una copia de un array lo podemos hacer con spread-operator >
const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)
//A veces usamos la copia para no mutar ciertos valores, es muy util para no modifica los valores originales

// 2. Combining Arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)


// 3. Creating Arrays with Additional Elements 
//podriamos crear arrays teniendo como base otro array y adicionandole diferentes elementos>

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)

// 4. Pass elements to functions
// le podemos pasar parámetros a una funcion

function sum(a, b, c) {
    return a + b + c
}

//podemos pasarle valores que tengamos en un array justamente como parámetros de una funcion

const numbers = [1, 2, 3]
const result = sum(...numbers)// resultado:6

console.log(result)