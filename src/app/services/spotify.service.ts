import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

   }

   getQuery(query: string){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({

      'Authorization':'Bearer BQB95F1nvR8ebRB1UhNkKHAdNvSe4yGLnU2a5hzTjlltUzZE_T7LXV-6miFm3gbdTvKkB2UNb_c8gRZDhmg'
    });

    return this.http.get(url, {headers});
   }

   getNewReleases(){

      return this.getQuery('browse/new-releases?limit=20') 
      .pipe(map( data =>  data['albums'].items));
        }

   getArtistas(termino:string){

          return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe(map( data => data['artists'].items));

   }
   getArtista(id:string){

    return this.getQuery(`artists/${ id }`)
    //.pipe(map( data => data['artists'].items));

  }
}
