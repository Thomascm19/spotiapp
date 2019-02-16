import { Injectable } from '@angular/core';
// Se importa para realizar al peticion HTTP y para definir los Headers requeridos por la API 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Se importa para realizar al peticion.
  constructor(private http: HttpClient) {

   }
   // Centralizamos la informacion
   getQuery(query: string) {
     const url = `https://api.spotify.com/v1/${query}`;
     // Se definen los headers que requiere la API de spotify
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBFa-u38Ns1afQB0UJl1yu8NB5dIJ89kih5jQ1Xs0fNbKBqA6L-1HUOAcUPO1vXzNOtfqnD8sYzQZ1h5fo'
    });
    // Retornamos la peticion GET enviando la constante y los headers.
    return this.http.get(url, {headers});
   }
   /*
    Obtenemos la informacion de los ultimos albums y
    filtramos la informacion con el operador map. 
   */
   getNewReleases() {
      return this.getQuery('browse/new-releases?limit=20')
      .pipe(map( data =>  data['albums'].items));
        }
    /*
     Obtenemos los artistas filtrandolos con el map.
     El 'termino' es el valor que captura el input.
    */
   getArtistas(termino: string) {

          return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe(map( data => data['artists'].items));

   }
   getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe(map( data => data['tracks']));
  }
}
