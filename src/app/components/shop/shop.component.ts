import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';
import { LeftpanelComponent } from 'src/app/modules/scope/shop/leftpanel/leftpanel.component';
import { ProductcardComponent } from 'src/app/modules/scope/shop/productcard/productcard.component';

import { CompanyService } from 'src/app/services/company/company.service';
import { SampleProductModel } from "src/app/models/sampleProductModel";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    LeftpanelComponent,
    ProductcardComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  // Sample Product Instances
  sampleInstance = new SampleProductModel(1, "Sample Title", "Sample Description", 9.99, "TestOne", 2.5);
  anotherSampleInstance = new SampleProductModel(2, "Another Title", "Another Description", 19.99, "TestTwo", 4.5);
  anotherSampleInstance2 = new SampleProductModel(3, "Third Title", "Third Description", 19.99, "TestTwo", 2.5);
  
  // Sort Option
  selectedSortOption: string = "";

  // Product Category Array
  ProductCategoriesList: Array<String> = ["none","TestOne","TestTwo"];

  // Sample Products Array
  ProductsTestList: Array<SampleProductModel> = [this.sampleInstance, this.anotherSampleInstance, this.anotherSampleInstance2];
  
  // Sample Sort Array
  ProductsFilterList: Array<SampleProductModel> = [this.sampleInstance, this.anotherSampleInstance, this.anotherSampleInstance2];
  ProductsPaging: Array<SampleProductModel> = [];

  // Sample Total Products Pagination
  TotalPagesAvailable: number = 3;
  CurrentPage: number = 1;
  PreviousPage: number = 1;
  NextPage: number = 2;

  constructor(private CompanyService: CompanyService) {}

  PaginationTestNext() {
    if(this.CurrentPage !== (this.ProductsTestList.length)) {
      this.CurrentPage++;
    }
  }
  
  async ngOnInit(): Promise<void> {
    console.log("start");
    await delay(5000);

    // Below is the logic to obtain categories from api
    // this.CompanyService.GetProductCategories()
    //   .subscribe(async(data: any) => {
    //     this.ProductCategoriesList = data;
    //     await this.ProductCategoriesList;
    //   });
  }

  SortedFilter() {
    if (this.selectedSortOption !== "" && this.selectedSortOption === "sortByPriceAscending")
      this.ProductsFilterList = this.ProductsTestList.sort((a, b) => a.price - b.price);
    else if (this.selectedSortOption !== "" && this.selectedSortOption === "sortByRatingsDescending")
      this.ProductsFilterList = this.ProductsTestList.sort((a, b) => b.rating - a.rating);
  }

  CategoryFilter(keyword: String) {
    if(keyword.toLowerCase() == "none")
      this.ProductsFilterList = this.ProductsTestList;
    else
      this.ProductsFilterList = this.ProductsTestList.filter(obj => obj.keyword === keyword);
  }

  
 
}
