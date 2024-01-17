import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadingComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError!: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, ( errorServicio ) => {

          this.loading = false;
          this.error = true;
          console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;

        });

  }

}
