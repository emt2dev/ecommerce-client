import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contactmodal',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './contactmodal.component.html',
  styleUrls: ['./contactmodal.component.css']
})
export class ContactmodalComponent {

}
