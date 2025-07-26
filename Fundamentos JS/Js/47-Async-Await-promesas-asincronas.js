//Async and await
//Te devuelve una promesa. Pero es una forma un poco más
// legible de poder leer los pasos

//function fetchData() {
    //la peticion a esta api
  //  fetch("https://rickandmortyapi.com/api/character")
    //el then es lo que se ejecuta una vez nuestra promesa se resuelve satisfactoriamente//   
  //  .then((response) => response.json
  //  ())
    //para transformar el json en la data que usamos tenemso que hacer otro .then
  //  .then ((data) => console.log(data))// asi nos imprime los datos que nos devuelve
    //si algo sale mal nos lo dirá el .cath
  //  .catch((error) => console.log 
  //  (error)); 

//}
//Al escribirlo en la consola del navegador no me da el resultado
//Pero si lo escribo aquí si puedo ver el objeto con el contenido
//fetchData();


// Para hacer que la función sea Async and await emieza con async
// así ya no estará esperando que sea una promesa
// try y catch nos permite hacer el manejo de errores
async function fetchData() {
    //hacemos la peticion del api y le decimos con el await lo que esperamos que resuelva la promesa
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        //si esto funciona haremos:
        let data = await response.json();
        //si esto se resuelve nos devuelve el dato de la respuesta e imprimir la data:
        console.log(data);
    } catch (error) {
        console.log(error);

    }

}

fetchData();
//Nos devuelve lo mismo que la anterior