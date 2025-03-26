// cada vez que queramos iterar sobre los elementos de una lista vamos a utilizar for of, los elementos de la lista son arrays y strings

//estructura base

//for (variable of objeto) {
//    código
//}


let canasta = ["manzana", "pera", "naranja", "uva"];

//por cada fruta de la canasta quiero que me imprimas las frutas

for (let fruta of canasta) {
    console.log(fruta);
}

//ME DECIA QUE FRUTA IS NOT DEFINED pero he añadido let antes de nombrar fruta y ahora si se pinta en la consola del navegador(hacia falta declararla)