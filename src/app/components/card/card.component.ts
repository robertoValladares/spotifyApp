import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ NoimagePipe ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }


  verArtista( item: any ) {

    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistaId  ]);

  }
}
