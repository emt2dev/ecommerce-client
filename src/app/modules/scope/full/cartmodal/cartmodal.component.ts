import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cartmodal',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './cartmodal.component.html',
  styleUrls: ['./cartmodal.component.css']
})
export class CartmodalComponent {

}
