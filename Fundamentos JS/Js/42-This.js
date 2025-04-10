// THIS se utiliza mucho para las clases y funciones constructoras

/*

this --hace referencia al objeto-- class

La usamos para poder tener referencia a los parámetros del constructor, para que cuando creemos la instancia el valor pueda existir directamente en el objeto

*/

//el nombre y la edad de de la persona va a ser lo que se coloque en la instancia de new Persona.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

const persona1 = new Persona("Alice", 25);

console.log(persona1);

persona1.nuevoMetodo = function () {
    console.log(`Mi nombre es ${this.nombre}`);
};

persona1.nuevoMetodo(); //nos dice el nombre de la instancia persona1 que ya tiene nombre