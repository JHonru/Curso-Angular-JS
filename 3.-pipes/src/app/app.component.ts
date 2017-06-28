import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

nombre = "Alejo";

nombre2="jorge HOnrubia GARCia"

arrai:number[]=[0,1,2,3,4,5,6,7,8,9,10];

PI=Math.PI;

a:number=0.234;

money:number=3214.543;

heroe={
  nombre:"Logan",
  apodo:"Lobezno",
  poderes:["Regeneración","Esqueleto de Adamantium","Empatía animal"],
  edad:500,
  grupos:{
    alpha:["Stitch","Saint Elmo","Snowbird","Smart Alec"],
    xmen:["Ciclops","Phoenix","Storm","Nightcrawler","Colossus"]
  }
}

valorPromesa = new Promise(( resolve,reject)=>{
  setTimeout( ()=>resolve('Datos listos'), 3500);})

fecha=new Date();


}
