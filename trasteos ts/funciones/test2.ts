interface Xmen{
  nombre:string,
  poder:string
}




function enviarMision(xmen:Xmen){
  console.log("Enviando a: "+xmen.nombre);
};
function enviarCuartel(xmen:Xmen){
  console.log("Enviando al cuartel: "+xmen.nombre);
};
let lobuno:Xmen = {
  nombre:"Lobo",
  poder:"Regeneration"
}
enviarMision(lobuno);
enviarCuartel(lobuno);

class Avenger{
  nombre:string;
  equipo:string;
  nombreReal:string;

  puedePelear:boolean;
  peleasGanadas:number;
  constructor( nombre:string, equipo:string, nombreReal:string ){

  }
}

let antman:Avenger = new Avenger();
console.log(antman);
