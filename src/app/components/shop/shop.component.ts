import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';
import { LeftpanelComponent } from 'src/app/modules/scope/shop/leftpanel/leftpanel.component';
import { ProductcardComponent } from 'src/app/modules/scope/shop/productcard/productcard.component';

import { CompanyService } from 'src/app/services/company/company.service';
import { SampleProductModel } from "src/app/models/sampleProductModel";

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
  
  sampleInstance = new SampleProductModel(1, "Sample Title", "Sample Description", 9.99, "TestOne");
  anotherSampleInstance = new SampleProductModel(2, "Another Title", "Another Description", 19.99, "TestTwo");
  
  ProductCategoriesList: Array<String> = ["TestOne","TestTwo"];
  ProductsTestList: Array<SampleProductModel> = [this.sampleInstance, this.anotherSampleInstance];
  
  ProductsFilterList: Array<SampleProductModel> = [this.sampleInstance, this.anotherSampleInstance];

  constructor(private CompanyService: CompanyService) {}

  
  async ngOnInit(): Promise<void> {
    console.log("start");
    await delay(5000);
    // this.CompanyService.GetProductCategories()
    //   .subscribe(async(data: any) => {
    //     this.ProductCategoriesList = data;
    //     await this.ProductCategoriesList;
    //   });
  }

  CategoryFilter(keyword: String) {
    this.ProductsFilterList = this.ProductsTestList.filter(obj => obj.keyword === keyword);
  }
 
}
