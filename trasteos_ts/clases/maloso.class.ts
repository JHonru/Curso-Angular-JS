function consola (constructor:Function){
  console.log(constructor);
}
@consola
class maloso{
  constructor(public nombre:string){

  }
}
