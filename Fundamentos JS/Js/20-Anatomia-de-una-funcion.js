//function: palabra clave
// suma: nombre
//(a,b): parámetros
// { }: llaves
// return: cuerpo ( que nos devuelve o ejecuta puede tenerlo o no)

//function suma(a, b) {
//    return a + b
//}

// llamado a la funcion (ejecutar) con el nombre de la funcion y los parámetros, los parámetros son llamados (argumentos) que son los valores

//suma(3, 5)

function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithdiscount = price - discount

    return priceWithdiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount:' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)