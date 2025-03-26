// for in lo usamos para poder iterar sobre objetos enumerables (objetos)

//los objetos tienen propiedad y valor

//por cada elemento o propiedad en este objeto, ejecútame este código
//for (variable in objeto) {
//    codigo
//}

const ListaDeCompras = {
    manzanas: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

//he vuelto a añadir let para que funcione

for (let fruta in ListaDeCompras) {
    console.log(fruta);
}

for (let fruta in ListaDeCompras) {
    console.log(`${fruta} : ${ListaDeCompras[fruta]}`) //me pinta las frutas y el numero (índice)
}

for (let fruta of ListaDeCompras) {
    console.log(fruta)
} //me dice que listadecompras no es iterable, porque no es objeto por lo tanto el for of no funciona