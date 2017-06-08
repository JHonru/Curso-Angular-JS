let avenger ={
  nombre: "Speedy",
  clave: "Arrow",
  poder: "flechas"
}

let {nombre, clave, poder}=avenger;
console.log(nombre, clave, poder);
console.log(clave);


let prom1 = new Promise(function (resolve,reject) {

  setTimeout (()=>{
    console.log("Promesa Terminada");

    resolve();
  },1500)

})

prom1.then(function(){
  console.log("Ejecutar si sale bien");

},
function () {
    console.error("Algo salio mal")
}
);
