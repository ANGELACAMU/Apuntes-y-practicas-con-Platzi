// CONTEXTOS DE EJECUCIÓN  Y SCOPE CHAIN

//Diferencias de las variables y usos
//var - funcion- hoisting- puede reasignarse y redeclararse
//let - bloque - no hoisting - puede reasignarse no redeclararse
//const - bloque - no hoisting - no puede reasignarse ni declararse

//EJEMPLO DE CÓDIDO 1
/*
_declaracion de las variables = asignación de las variables>

const productName= 'Smartphone'
const price = 499
const brand = 'TechCo'

_funcion que declara dos variables y return donde toma variables anteriores, el console.log ejecuta la funcion>

function getProductDetails () {
    const productName = 'Laptop'
    const price = 899

    return `The ${productName} costs $${price} and is from the brand ${brand}.`
}

console.log(getProductDetails())

RESULTADO/SALIDA: The Laptop costs $899 and is from the brand TechCo.

Análisis: primero tomó la información de las variables internas, luego externas.
*/

//EJEMPLO DE CÓDIGO 2

/*
IGUAL QUE EL ANTERIOR pero cambiamos la ejecución del console.log de este modo:

console.log(`The ${productName} costs $${price} and is from the brand ${brand}.`)

RESULTADO/SALIDA: The Smartphone costs $499 and is from the brand TechCo.

Análisis: Tomó la información directamente de las variables externas, la funcion fue ignorada.

CONTEXTO GLOBAL= Sería lo que está fuera de la función - fuera de las {} - del contexto global no podemos acceder a los contextos locales
CONTEXTO LOCAL= las funciones o bloques - cuando usamos {} - del contexto local si podemos acceder al global

*/

//EJEMPLO DE CÓDIGO 3

/*
const userPoints = 150

function checkAccess() {
    if (userPoints < 100) {
    const message = "Access denied: Insufficient points!"
    return message

    } else {
      const message = "Access granted: Enjoy the premium features!"
      return message
    }
}

console.log(checkAccess())

BLOQUES:
function example 89 {...}
for (let i = 0; i < array.length; i++) {...}
while (count < 5) {...}
if (count === 2) {...}
{...}


CONTEXTO GLOBAL = const y console.log
CONTEXTO LOCAL = 1 function chekAcces, 2 condicionales (serian 3 bloques)
*/

// SCOPE CHAIN = CADENA DE ALCANCES, a donde tienen esas variables alcances , yendo del contexto local al global.

//EJEMPLO DE CÓDIGO 4

const globalVariable = 'carita'

function localOne() {
    console.log('GLOBAL 1:', globalVariable)
    //console.log('LOCAL 1:', localVariable)

    function localTwo() {
        const carrot = 'zanahoria'
        console.log('LOCAL 2:', carrot)
    }

    function localThree() {
        console.log('LOCAL 3:', carrot)
    }

    localTwo()
    localThree()
}

console.log(localOne())

//RESULTADO/SALIDA:
// GLOBAL 1: carita
//PERO ERROR!!! -> localVariable is not defined at localOne(24 - contexto - ejecucion - scopechain.js: 86: 29)

// si comentamos: //console.log('LOCAL 1:', localVariable)
//RESULTADO/SALIDA:
//GLOBAL 1: carita y LOCAL 3: zanahoria
//PERO ERROR!!! -> carrot is not defined at localThree(24 - contexto - ejecucion - scopechain.js: 94: 33) at localOne(24 - contexto - ejecucion - scopechain.js: 98: 5) at

//Análisis: entre variables locales no se pueden comunicar, no está tomando la información de carrot de la funcion donde está definida que es localTwo, se va directamente a las globales, pero como no encuentra deficinion de carrot DA ERROR

//CONCLUSIÓN: Ir de pequeño a grande, de locales a globales, si queremos que tome la información.