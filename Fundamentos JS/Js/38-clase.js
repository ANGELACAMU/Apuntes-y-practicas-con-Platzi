// Una clase genera el molde(BLUEPRINT -plantilla o modelo) del cual se van a construir diferentes objetos, es como una función constructora pero con una sintáxis distinta

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

//Ahora le damos valor a las propiedades:
//le creamos una primera instancia para la sintaxis de CLASS ^

const persona1 = new Persona("Mariana", 25);

persona1.saludar();
