interface Xmen{
  nombre:string,
  poder:string
}

import {maloso, perroso} from "../clases/index"


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
this.nombre=nombre;
this.equipo=equipo;
this.nombreReal=nombreReal;

  }
}

let antman:Avenger = new Avenger("Pepe","Poco","Pillo");
console.log(antman);
