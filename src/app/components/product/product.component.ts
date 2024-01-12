import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, delay } from 'rxjs';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { ProductWithStyleDTO } from 'src/app/models/ProductWithStyleDTO';
import { StyleDTO } from 'src/app/models/StyleDTO';
import { CompanyService } from 'src/app/services/company/company.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  template: `<dd class="col-9">{{ Price }} <strong>|</strong> {{ Description }}</dd>`,
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product: ProductWithStyleDTO | any;
  TestParams: Number | undefined;
  // Price: Number = 0.00;
  SelectedImage: string = 'https://placehold.co/600x400';
  ImageUrls: Array<string> = [];
  // Description: string = '';
  fallbackImageUrl: string = 'https://placehold.co/600x400';
  @Input() Price: Number = 0.00;
  @Input() Description: string = '';
  SelectedStyle: StyleDTO | any;

  // private selectedProductSource = new BehaviorSubject<any>(null);
  // selectedProduct$ = this.selectedProductSource.asObservable();

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private productService: ProductService, private changeDet: ChangeDetectorRef) {}

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
        await delay(5000);
        await this.Product;
        console.log(`Product Data: ${JSON.stringify(this.Product)}`)

        const firstStyle = this.Product.styles[0];

        console.log(`First Style: ${JSON.stringify(firstStyle)}`)
        this.Description = firstStyle.description;
        this.Price = firstStyle.currentPrice;
        await delay(5000);
        // this.ImageUrls = firstStyle.productImageUrls;

        // if(this.ImageUrls.length > 0) this.SelectedImage = this.ImageUrls[0];
       
        this.SelectedStyle = firstStyle;
        // this.Description = this.Product.styles[0].description;
        // this.Price = this.Product.styles[0].currentPrice;
        this.SelectedImage = this.SelectedStyle.productImageUrls;
        // this.SelectedStyle = this.Product.styles[0];
        
      });
    }

    trackById(index: number, item: any): any {
      return item.id; // Use the actual unique identifier property
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

  OnChange($event: any): void {  
    const value = parseInt($event.target.value);

    console.log('Product.styles:', this.Product.styles);
    console.log('SelectedStyle value:', value);
    this.SelectedStyle = this.Product.styles.find((style: StyleDTO) => style.id === value);
    console.log('SelectedStyle:', this.SelectedStyle);

    this.SelectedImage = this.SelectedStyle.productImageUrls[0];
    console.log(this.SelectedStyle);
    // this.SelectedImage = value.prod // Update to the actual property used for the image
    this.Description = this.SelectedStyle.description;
    this.Price = this.SelectedStyle.currentPrice;
  }
}
