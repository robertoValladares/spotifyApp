import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service ready');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDsnU8IhPdDKrUXuWq7FVMlrNmZrmMJiSyG6fRESINYgAJBBpnLiQ6GThLMuQsxqlLJVavErt4qQAgzvrA'
    });

    return this.http.get(url, { headers });

  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( (data: any) => data['albums'].items ));

  }

  getArtists( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data: any) => data['artists'].items));

  }

  getArtist( id: string ) {

    return this.getQuery(`artists/${ id }`)
                .pipe( map( (data: any)=> data['artists'].items));

  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( (data: any) => data['tracks']));

  }

}
