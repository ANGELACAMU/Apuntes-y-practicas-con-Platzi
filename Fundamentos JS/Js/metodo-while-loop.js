//Método while - meter instrucciones en un ciclo que se vaya repitiendo siempre y cuando sea TRUE la (instrucción)condicion que hay dentro

// Estructura básica
// while(condicion){
//    código
//}
//IMPORTANTE PORQUE PODEMOS ENTRAR EN LOOP INFINITO EN EL NAVEGADOR Y SE COMA TODA LA MEMORIA RAM y el navegador deje de funcionar

//Ejemplo

let contador = 0; //en el contador metemos la condicion

while (contador < 10) {
    console.log(contador)
    contador++;
}
//se imprimen del 0 al 9 (lo que es true en la condicion)
