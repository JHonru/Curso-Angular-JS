import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent  {
  mostrar:boolean=true;

  texto:string="Yo no soy el señor Lebowski, usted es el señor Lebowski. Yo soy El Nota, así tiene que llamarme, ¿entiende? Así o Su Notaridad, o El Noti, o El Notarino... en fin, si no le hacen los nombres cortos...";
  autor:string="El Gran Lebowsky | El Nota";
  personajes:string[] =["Leroy", "Marcus", "Thrall"]
}
