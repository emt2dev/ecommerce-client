import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  ImagesArray: Array<string> =[
    "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg",
    "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg",
  ];

  ApiImageArray: Array<string> = [];

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {}

  async ngOnInit(): Promise<void> {

    await delay(5000);
    this.companyService.GetCompanyImages().subscribe(async(data: any) => {
      this.ApiImageArray = data;
      await this.ApiImageArray;

      if(this.ApiImageArray.length > 1) this.ImagesArray = this.ApiImageArray;
      
    });
  }
}
