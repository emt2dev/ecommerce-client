import { Component } from '@angular/core';
import { GalleryComponent } from 'src/app/modules/scope/landing/gallery/gallery.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    GalleryComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

}
