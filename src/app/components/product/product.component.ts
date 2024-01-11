import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, delay } from 'rxjs';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { ProductWithStyleDTO } from 'src/app/models/ProductWithStyleDTO';
import { StyleDTO } from 'src/app/models/StyleDTO';
import { CompanyService } from 'src/app/services/company/company.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product!: ProductWithStyleDTO;
  TestParams: Number | undefined;
  Price: Number = 0.00;
  SelectedStyle!: StyleDTO;
  SelectedImage: string = '';
  Description: string = '';
  fallbackImageUrl: string = 'https://placehold.co/600x400';


  // private selectedProductSource = new BehaviorSubject<any>(null);
  // selectedProduct$ = this.selectedProductSource.asObservable();

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private productService: ProductService) {}

  // async ngOnInit(): Promise<void> {
  //   // Get product details from the shared service
  //   console.log('Product Component initialized');
  //   this.productService.selectedProduct$.subscribe(async (product: any) => {
  //     console.log('Selected Product:', JSON.stringify(this.Product)); 
  //     this.Product = product;
  //     await delay(5000);
  //     await this.Product;
  //     this.SelectedStyle = product.styles[0];
  //     this.SelectedImage = product.styles[0].productImageUrls[1];
  //     this.Price = product.styles[0].currentPrice;
  //     console.log('Selected Product:', this.Product); 
  //   });

    async ngOnInit(): Promise<void> {
      let parameters = this.route.snapshot.paramMap;
      let productId = Number(parameters.get("productId"));
  
      this.TestParams = productId;
  
      await delay(5000);
      this.companyService.GetProductDetails(productId).subscribe(async(data: any) => {
        this.Product = data;
        await this.Product;
        this.Description = this.Product.styles[0].description;
        this.Price = this.Product.styles[0].currentPrice;
        this.SelectedImage = this.Product.styles[0].productImageUrls[0];
        this.SelectedStyle = this.Product.styles[0];
        
      });
    }

    // Alternatively, you can also get product details from the route params
    // this.route.params.subscribe((params) => {
    //   const productId = +params['id'];
    //   // Fetch product details using the productId
    //   // Example: this.productService.getProductDetails(productId);
    // });

   // Handle image loading errors and set the fallback image URL
   handleImageError(event: any): void {
    event.target.src = this.fallbackImageUrl;
  }

  OnChange(event: any): void {
    const selectedStyle: StyleDTO = event.target.value;
    console.log(`changed to style ${JSON.stringify(selectedStyle)}`);
  
    this.SelectedStyle = selectedStyle;
    this.SelectedImage = selectedStyle.productImageUrls[1]; // Update to the actual property used for the image
    this.Description = selectedStyle.description;
    this.Price = selectedStyle.currentPrice;
  }
}
