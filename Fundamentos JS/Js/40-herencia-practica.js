/*La propiedad prototipo solo existe en funciones de objetos, quiere decir que solo existe en clases o funcionces constuctoras, solo estas generan la propiedad prototipo.

El prototipo tiene por dentro los mismos metodos y propiedades que construyamos en las clases o funciones constructuras para que podamos compartirlos con lo que se extienda mas ayá de eso

La propiedad de prototipo que se genera sola solo funciona con funciones y clases, las instancias no tienen esta propiedad
*/

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {//metodo
        console.log("El animal emite un sonido")
    }
}

//instancias de animal, que queremos que se extienda a Animal:
//super es para poder usar el this.

class Perro extends Animal { //así hacemos herencia
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza; //lo nuevo que añadimos
    }
    emitirSonido() {//quiero que si lo uso en Perro sea distinto este método
        console.log("El PERRO ladra")
    }

    correr() {
        console.log(`${this.nombre} corre alegremente`)
    }
}
//la herencia te permite utilizar los metodos y propiedades de una clase que ya existe para que no tengas que replicarlo con > extends

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1)

perro1.correr();//Respuesta: Bobby corre alegremente
perro1.emitirSonido();//nos regresa el metodo que esta dentro de la clase perro, no el de la clase Animal, por que estamos REESCRIBIENDO el método