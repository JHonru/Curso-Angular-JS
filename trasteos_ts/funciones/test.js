var avenger = {
    nombre: "Speedy",
    clave: "Arrow",
    poder: "flechas"
};
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
console.log(clave);
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        resolve();
    }, 1500);
});
prom1.then(function () {
    console.log("Ejecutar si sale bien");
}, function () {
    console.error("Algo salio mal");
});
