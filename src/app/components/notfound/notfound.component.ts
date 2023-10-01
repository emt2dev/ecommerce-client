import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  /**
   *
   */
  constructor(public router: Router) {}

  async ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  };

}