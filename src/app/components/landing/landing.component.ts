import { Component } from '@angular/core';
import { AboutComponent } from 'src/app/modules/scope/landing/about/about.component';
import { GalleryComponent } from 'src/app/modules/scope/landing/gallery/gallery.component';
import { ServicesComponent } from 'src/app/modules/scope/landing/services/services.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    GalleryComponent,
    AboutComponent,
    ServicesComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

}
