/* RED-SOCIAL

1. La persona tiene que ingresar su usuario y contraseña.
2. El tiene que validar si el usuario y la contraseña existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeLine.


*/

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
            console.log("Es correcto");
            break; //lo escribimos para el caso de ser correcto que no siga haciendo validaciones
        } else {
            console.log("No es correcto")
        }
    }
}

//Llamamos a la funcion
usuarioExistente(username, password);