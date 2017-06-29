import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean=true): string {

  let  arrayLetras:string[]=value.split("");


  if(activar){
     for(let i in arrayLetras){
       arrayLetras[i]="*";
     }
     return arrayLetras.join("");
   }
//if(activar){
//  let salida:string="";
//  for( let i = 0; i < value.length; i++){
//    salida+="*";
//  }
//  return salida;
//}

    else{
      return value;
    }
  }

}
