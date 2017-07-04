import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

artistas:any[]=[];


urlBusqueda:string="https://api.spotify.com/v1/search";


  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();

    headers.append( 'authorization','Bearer BQCo7GKrKDJfxe23BVXiKXjeZ9ULmMnR4yDMWqq86HoBAPUl5oU9CoJkghxedtDTguF_tIDyeaxywJWRb8vnkg');

    let query=`?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } ).map( res =>{
      //console.log(res.json().artists.items);
    this.artistas=res.json().artists.items;
    console.log(this.artistas);
    return res.json().artists.items;
    })

  }


}
