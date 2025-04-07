/*
Estructura de datos
nos va a ayudar a guardar informacion de esta forma en particular, teniendo en cuenta:
key/value

key es una propiedad que va a tener un valor

ESTRUCTURA:

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor

    métodos()
}

//si no queremos tener mas propiedad y valor, los objetos también tienen los métodos, que son las acciones que hacen con la informacion,
    la forma de generar los métodos es como si hiciéramos una función pero esta función va dentro de nuestro objeto

*/

const persona = {
    nombre: "John",
    edad: 38,
    direccion: { //objeto anidado
        calle: "Av Insurgentes 90",
        ciudad: "CDMX"
    },
    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona);
persona.saludar()


//Agregar nuevas propiedades o nuevos métodos

persona.telefono = "555-555-555";
console.log(persona.telefono);

//si abrimos el objetos vemos que se agregó la propiedad teléfono

persona.despedir = () => {
    console.log("Adios");
};

persona.despedir();
//despedir se agregó de forma independiente después del objeto ser creado


//FORMA DE BORRAR PROPIEDADES 

delete persona.telefono;

//FORMA DE BORRAR MÉTODOS:

delete persona.despedir;