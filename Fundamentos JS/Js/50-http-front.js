fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> response.json())
    .then((data)=> console.log(data));

    
/* 
Abrimos en la inspeccion de la consola la pestaña
Networks
Ahí podemos ver todo el viaje que hace, procesos,
tiempo...
Si clicamos en el posts> y luego en header podemos ver 
la url de donde viene, el tipo de método que utilizamos,
que es un get por fetch automatico

*/