import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';
import { LeftpanelComponent } from 'src/app/modules/scope/shop/leftpanel/leftpanel.component';
import { ProductcardComponent } from 'src/app/modules/scope/shop/productcard/productcard.component';

import { CompanyService } from 'src/app/services/company/company.service';
import { CategoryDTO } from 'src/app/models/CategoryDTO';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { ProductService } from 'src/app/services/product/product.service';
import { RouterModule } from '@angular/router';
import { ProductWithStyleDTO } from 'src/app/models/ProductWithStyleDTO';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    LeftpanelComponent,
    ProductcardComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  ProductCategoriesList: Array<string> = [];
  ProductList: Array<ProductWithStyleDTO> = [];
  FilteredProductList: Array<ProductWithStyleDTO> = [];
  ShowProductList: boolean = true;
  ShowFilteredProductList: boolean = false;

  currentPage = 1;
  pageSize = 15; // Number of items per page

  constructor(private CompanyService: CompanyService, private productService: ProductService) {}

  async ngOnInit(): Promise<void> {
    await delay(5000);
    this.CompanyService.GetProductCategories()
      .subscribe(async(data: any) => {
        this.ProductCategoriesList = data;
        await this.ProductCategoriesList;
      });
      
      this.CompanyService.GetAvailableCompanyProducts()
        .subscribe(async(data: any) => {
          console.log(JSON.stringify(data));
          this.ProductList = data;
          await this.ProductList;
        });
  }

  CatChange(Category: string) {
    console.log(`new category ${Category}`);
      this.FilteredProductList = this.ProductList.filter(product =>
        product.product.name.includes(Category.toLowerCase()) ||
        product.product.description.includes(Category.toLowerCase()) ||
        product.product.seo.includes(Category.toLowerCase())
      );

    this.ShowProductList = false;
    this.ShowFilteredProductList = true;
    };
 
    // onProductSelected(product: ProductWithStyleDTO): void {
    //   console.log(`selected this product ${JSON.stringify(product)}`)
    //   this.productService.setSelectedProduct(product);
    //   console.log(`set this with the service ${JSON.stringify(product)}`)
    // }

    ResetFilter() {
      // Reset FilteredProductList to the original ProductList
      this.FilteredProductList = this.ProductList;
    
      // Show the original product list
      this.ShowProductList = true;
      this.ShowFilteredProductList = false;
    };

    loadPage(): void {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.ProductList = this.ProductList.slice(startIndex, endIndex);
    }
  
    nextPage(): void {
      if (this.currentPage < Math.ceil(this.ProductList.length / this.pageSize)) {
        this.currentPage++;
        this.loadPage();
      }
    }
  
    prevPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadPage();
      }
    }
  
}
