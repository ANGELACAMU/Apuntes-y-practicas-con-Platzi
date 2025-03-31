//Methods that modify the original array (Mutability)

//PUSH

const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries)
console.log(newCountries)
//Tenemos el array original modificado con el nuevo, y en el segundo consolelog nos dice la longitud del ahora modificado

//POP()
//primero nos elimina el ultimo elemento del Array y adicional nos devuelve ese valor

const removedCountry = countries.pop()

console.log(countries)
console.log(removedCountry)
//el valor que nos devuelve la consola, aparte de los paises modificados es Australia, que ha sido el continente eliminado
