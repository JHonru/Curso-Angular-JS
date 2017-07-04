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

    headers.append( 'authorization','Bearer BQCd7QgwjvmfJdzA9vWOu7U-DV-o2TCCY-XXzHgsovP5AqZUyqfciS-SWBxmD6QpgWfEWyuyCbHzhqNem9D2MA');

    let query=`q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } ).map( res =>{
      console.log(res);
    })

  }


}
