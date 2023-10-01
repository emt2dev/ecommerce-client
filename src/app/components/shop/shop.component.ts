import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';
import { LeftpanelComponent } from 'src/app/modules/scope/shop/leftpanel/leftpanel.component';
import { ProductcardComponent } from 'src/app/modules/scope/shop/productcard/productcard.component';

import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    LeftpanelComponent,
    ProductcardComponent,
    CommonModule,
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  ProductCategoriesList: Array<String> = [];

  constructor(private CompanyService: CompanyService) {}

  async ngOnInit(): Promise<void> {
    console.log("start");
    await delay(5000);
    this.CompanyService.GetProductCategories()
      .subscribe(async(data: any) => {
        this.ProductCategoriesList = data;
        await this.ProductCategoriesList;
      });
  }
 
}
