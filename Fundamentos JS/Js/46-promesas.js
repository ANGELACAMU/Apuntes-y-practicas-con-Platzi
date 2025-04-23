/*
Las PROMESAS nos permiten que el codigo pase de ser sincrono a asincrono.

Tienen 3 ESTADOS:
-Pending: cuando la promesa se va a crear, esta pendiente porque se va a generar la promesa
-Fullfilled: lo devolverá cuando la promesa se resuelva, para bien o para mal
-Rejected: la promesa no se resolvió


Manejan 2 tipos de CALLBACKS:
-Resolve: cuando la promesa se resuelve de manera satisfactoria
-Reject: cuando no se puede resolver

Pueden usar 2 métodos:
-Then: se ejecuta cuando la promesa se resuelve
-Catch: cuando no se resuelve obtenemos el error para saber que es lo que hace que la promesa no se resuelva
*/

//Construimos una instancia con dos parámetros, el setTimeout es para generar validación, para darle tiempo y que nos devuelva resultado
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
        if (operationSuccessful) {
            resolve("La operación fue exitosa!");
        } else {
            reject("Falló la operación");
        }
    }, 2000);//así marcamos 2 segundos de carga
});



promise
    .then((successMessage) => {
        console.log(successMessage);
    }
    )
    .catch((errorMessage) => {
        console.log(errorMessage)
    }
    );

console.log(promise)
//si queremos decirle que sea diferente a true el resultado añadimos ! delante de operacionSuccessful en el if