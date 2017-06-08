function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
;
var lobuno = {
    nombre: "Lobo",
    poder: "Regeneration"
};
enviarMision(lobuno);
enviarCuartel(lobuno);
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
    }
    return Avenger;
}());
var antman = new Avenger();
console.log(antman);
