/*
const persona = {
    nombre: "Diego",
    apellido: "González"
}


    A la hora de trabajar objetos con esta estructura familiarizada, con sus propiedades.. pero si necesitamos construir 500 personas??

    La FUNCION CONSTRUCTORA nos ayudará con esto:
*/
//La funcion tiene la primera letra en MAYÚSCULA
//Le agregamos las propiedades en los parámetros
//this. nos marca el significado = al valor del parámetro

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//Si queremos construir objetos usando esta funcion:

const persona1 = new Persona("Juan", "Perez", 30);
console.log(persona1);
//a esto se le llama instancias


//El beneficio es que si quiero añadir alguna persona nueva solo tengo que:

const persona2 = new Persona("Diego", "De Granda", 35);
console.log(persona2)

//Tenemos los dos objetos una persona Juan y otra Diego
//Así inyectamos las personas que queremos en nuestro documento



//Generar una propiedad después a Persona, como género o dirección:

Persona.prototype.telefono = "555-555-555"; // se añade dentro del prototype. 
//El protitype es la copia de la funcion constructora que se encarga de compartir cada una de las propiedades o métodos que existen en mi función, no viene directamente desde el constructor (Persona) sino desde el prototype


persona1.nacionalidad = "Sevillana";//si solo quiero añadir una nueva propiedad a una instacia en particular



//Si queremos añadir a la funcion constuctora un MÉTODO:

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona1.saludar();
persona2.saludar();