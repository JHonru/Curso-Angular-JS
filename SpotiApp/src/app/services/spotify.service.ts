import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService implements OnInit {

artistas:any[]=[];
client_id="d5f7b0ef08664aa58ad43f6674b5df1f";
client_secret="1697f79545fc4860a1d510896768d69d";

urlBusqueda:string="https://api.spotify.com/v1/search";
urlToken:string="https://accounts.spotify.com/api/token";
token:string="";


  constructor( private http:Http ) { }

  ngOnInit() {


  }

  getArtistas( termino:string ){

    let headers = new Headers();

    headers.append( 'authorization','Bearer BQCy5SUxj2MvYCdSK_ABag9xrV9wm9BffThYLNb6WQdGPpyY1qhuCWIz4G3oO-GDzPuicjsfqm6-BJa-U5-30w');

    let query=`?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } ).map( res =>{
      //console.log(res.json().artists.items);
    this.artistas=res.json().artists.items;
    console.log(this.artistas);
    return res.json().artists.items;
    })

  }
//getToken(){
//
//  let query=`?client_id=${this.client_id}&client_secret=${this.client_secret}&grant_type=client_credentials`
//  let url=this.urlToken + query;
//   this.token= this.http.post(url).map( res=>{ return res.json().access_token;});
//
//}



}
