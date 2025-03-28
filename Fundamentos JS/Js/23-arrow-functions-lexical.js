//ARROW FUNCTIONS Y LEXICAL BINDING

//Funcion tradicional:
/*
function almuerzo(proteina, verdura) {
    return `${proteina} ${verdura}`
}

console.log(almuerzo('🐤', '🥕'))
*/

//LAS ARROW FUNCTIONS se crearon para hacer funciones más cortas y evitar contexto y que no tenga vinculacion

//Funcion Arrow:
/*
const almuerzo = (proteina, verdura) => {
    return `${proteina} ${verdura}`
}

console.log(almuerzo('🐤', '🥕'))
*/

//EJEMPLO ARROW

const greeting = function (name) {
    return `Hi, ${name}`
}

//Arrow function - Explicit return

const newGreting = (name) => {
    return `Hi, ${name}`
}

//Arrow function - Implicit return

const newGretingImplicit = name => `Hi, ${name}` //cuando es solo un parámetro (name) no necesita ir con ()

const newGretingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}` //En este caso (name, lastName) van entre () porque son dos parámetros



// LEXICAL BINDING

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },

    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('Un gran poder conlleva una gran responsabilidad')

finctionalCharacter.messageWithArrowFunction('Cuidado con el doctor Octopus')