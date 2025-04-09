class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido")
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido() {
        console.log("El PERRO ladra")
    }

    correr() {
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1)
perro1.correr();
perro1.emitirSonido();

//---Si quiero generar de mi instancia de perro1 un nuevo método -//

perro1.nuevoMetodo = function () {
    console.log("Este es un método");
}//con esto agrego un nuevo metodo solo a la instancia

console.log(perro1.nuevoMetodo);

//Si quiero agregar el metodo a mi clase constructora o clase padre (Perro) lo inyectamos al prototipo que se genera automaticamente cuando yo genero mi clase de perro

Perro.prototype.segundoMetodo = function () {
    console.log("Es otro nuevo método")
}
console.log(Perro.prototype)//Así nos aparece el método en el padre (dentro de Animal)
console.log(perro1.segundoMetodo)//nos muestra el mensaje del console.log de arriba: "Es otro nuevo método"


//CADENA DE PROTOTIPO//
let currentPrototype = Object.getPrototypeOf(perro1);

for (
    ;
    currentPrototype !== null;
    currentPrototype =
    Object.getPrototypeOf(currentPrototype)
) {
    console.log(currentPrototype);
}

//con el bucle for guardamos todos los prototipos encadenados de dentro en la variable currentPrototype hasta llegar a NULL

//LA CADENA DE PROTOTIPOS es como los objetos estan interconectados y eso nos lleva a los prototipos que nos ayuda a llegar a los metodos de los cual podemos extender y estos metodos son los que se heredan para nuestras instancias, nos ayudaran para resolver cosas y que heredan de los objetos padre