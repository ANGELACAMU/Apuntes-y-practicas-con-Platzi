/*
Un objeto es una estructura de datos que me ayuda a guardar valores de una forma particular, se le llama: key / value

propiedad = valor
^ esto nos ayuda a generar la estructura de lo que conocemos como un objeto

esa estructura mucho más generalizada:

objeto {
    propiedad = valor,
    propiedad: valor ---> la estructura real con : los dos puntos
    métodos
}

*cada propiedad tiene que tener un valor

*Algo importante a destacar de los objetos: nos permite abstraer cosas objetos de la realidad para poder llevarlos a programación

*/


//EJEMPLO: Como llevar una persona a la programación con un objeto

const persona = {
    nombre: "John",
    edad: 30,
    direccion: { //objeto interno con otro tipo de propiedades
        calle: "Av Insurgente 186",
        ciudad: "CDMX",
    },
    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}
//los metodos son funciones que están dentro de objetos que nos ayudan a generar la interación
persona.saludar();
//en la clase faltaba llamar al método para que apareciera el console.log