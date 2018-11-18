import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

   }

   getNewReleases(){
const headers = new HttpHeaders({

  'Authorization':'Bearer BQCjnSmGemHW8w2YJwW8s5OUjCztV7kw4RgRg2tfPHNVTpSpYzKlxadoJBxe_e8KHATKX9S-nWEIIi7E4Lw'
});

      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
   }
}
