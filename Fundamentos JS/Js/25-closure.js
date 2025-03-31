//¿QUÉ ES CLOSURE?

/*
CLOSURE: función que tiene acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse.

Ámbito léxico: cada vez que se declara una función, crea su propio ámbito léxico, y se puede acceder a las variables dentro de ese ámbito y a las variables en ámbitos superiores.
*/

//EJEMPLO

function outerFunction() {
    let outerVariable = "I am from outer function"
    function innterFunction() {
        console.log(outerVariable)
    }

    return innterFunction
}

const closureExample = outerFunction()
closureExample()

//RESULTADO CONSOLA: I am from outer function

function createCounter() {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

/*RESULTADO CONSOLA:
1
2
1
*/

function outer() {
    let message = "Hello,"

    function inner(name) {
        console.log(message + name)
    }

    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alicia") //es otro modo de hacer console.log
closureA("Bob")

/*RESULTADO CONSOLA:
Hello,Alicia
Hello,Bob
*/

//Tenemos una función, por dentro otra función que nos permite el ingreso de un nombre y el acceso a un mensaje externo, los contextos serian Alicia y Bob.

//Con los closures podemos trabajar con diferentes tipos de ámbitos y también podemos crear funciones flexibles - cuidado con el almancesamiento de memoria