import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { LoadingComponent } from '../shared/loading/loading.component';
import { DomseguroPipe } from '../../pipes/domseguro.pipe';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [NoimagePipe, LoadingComponent, DomseguroPipe],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  artista: any = {};
  topTracks: any[] = [];

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService ) {

    this.loadingArtist = true;

    this.router.params.subscribe( params => {

      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );

    });

  }


  getArtista( id: string ) {

    this.loadingArtist = true;

    this.spotify.getArtist( id )
          .subscribe( artista => {
            console.log(artista);
            this.artista = artista;

            this.loadingArtist = false;
          });

  }

  getTopTracks( id: string ) {

    // this.spotify.getTopTracks( id )
    //         .subscribe( topTracks => {
    //           console.log(topTracks);
    //           this.topTracks = topTracks;
    //         });

  }


}
