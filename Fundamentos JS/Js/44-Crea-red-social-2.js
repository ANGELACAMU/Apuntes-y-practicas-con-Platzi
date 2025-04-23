//En este ejercicio mostraremos el timeline

const usersDatabase = [
    {
        username: "Paquita",
        password: "123",
    },
    {
        username: "Manolita",
        password: "456",
    },
    {
        username: "Dolores",
        password: "789",
    },
];

const usersTimeLine = [
    {
        username: "Estefany",
        timeline: "Me encanta comer",
    },
    {
        username: "Paquita",
        timeline: "Te llevo el negocio al infinito",
    },
    {
        username: "Hermenegildo",
        timeline: "Tengo sueño todo el rato",
    },
    {
        username: "Dolores",
        timeline: "Me duele el corazón de quererte tanto",
    },
];


//1.ingresar usuario-contraseña

const username = prompt("¿Cúal es tu usuario?");
const password = prompt("¿Cúal es tu contraseña?");

function usuarioExistente(username, password) {
    for (let i = 0; i < usersDatabase.length; i++) {
        if (
            usersDatabase[i].username === username &&
            usersDatabase[i].password === password
        ) {
            //cambiamos los console.log por true-false
            return true;
        }

    }
    return false;//lo hemos sacado del bucle for para que funcionen el resto de usuarios, no solo el primero, sino, los recorre como false, de este modo el bucle recorre uno y otro hasta finalmente detectar el false
}

//Esta funcion va a recibir los parametros que ya agrego el usuario
function signIn(username, password) {
    if (usuarioExistente(username, password)) {
        //en caso de que sea true (existe):
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeLine);
    } else { //en caso de ser false
        alert("Uuups, usuario o contraseña incorrecta")
    }
}

signIn(username, password);