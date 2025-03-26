//EJECUCION CONDICIONAL: SWITCH
//estructura de control parecida a if y else if, valida si lo que está dentro es TRUE, en caso de que no será DEFAULT

switch (expresion) {
    case valor1:
        //codigo a ejecutar
        break; //para romper con el codigo en el caso de que sea real y ejecutarlo finalmente
    case valor2:
        //codigo a ejecutar
        break;
    default:
    //codigo
}

----

    let expr = "Papayas"

switch (expr) { //lo que hace es semejante a ===
    case "Naranjas":
        console.log("Las naranjas cuestan 20 el kg")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan 43 el kg")
        break;
    case "Plátanos":
        console.log("El plátano esta en 30 el kg")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan 25 el kg")
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`)

}

console.log("¿Hay algo más que desees?")