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
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Pepe", "Poco", "Pillo");
console.log(antman);
