import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, delay } from 'rxjs';
import { AddProductToCartDTO } from 'src/app/models/AddProductToCartDTO';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { ProductWithStyleDTO } from 'src/app/models/ProductWithStyleDTO';
import { StyleDTO } from 'src/app/models/StyleDTO';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-product',
  template: `<dd class="col-9">{{ Price }} <strong>|</strong> {{ Description }}</dd>`,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product: ProductWithStyleDTO | any;
  SelectedImage: string = 'https://placehold.co/600x400';
  ImageUrls: Array<string> = [];
  fallbackImageUrl: string = 'https://placehold.co/600x400';
  @Input() Price: Number = 0.00;
  @Input() Description: string = '';
  SelectedStyle: StyleDTO | any;
  QuantityAddingToCart: number = 1;
  AddProductToCartDTO: AddProductToCartDTO = {
    cartId: 0,
    productId: 0,
    styleId: 0,
    count: 0
  }

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private changeDet: ChangeDetectorRef) {}

    async ngOnInit(): Promise<void> {
      let parameters = this.route.snapshot.paramMap;
      let productId = Number(parameters.get("productId"));
    
      await delay(5000);
      this.companyService.GetProductDetails(productId).subscribe(async(data: any) => {
        this.Product = data;
        await delay(5000);
        await this.Product;

        const firstStyle = this.Product.styles[0];
        this.Description = firstStyle.description;
        this.Price = firstStyle.currentPrice;
        await delay(5000);
       
        this.SelectedStyle = firstStyle;
        this.SelectedImage = this.SelectedStyle.productImageUrls;
        
        this.AddProductToCartDTO.cartId = parseInt("1");
        this.AddProductToCartDTO.productId = productId;
        this.AddProductToCartDTO.styleId = parseInt(this.SelectedStyle.id);
        this.AddProductToCartDTO.count = 1;
      });
    }

    addToCart() {
      this.AddProductToCartDTO.count++;
    }

    removeFromCart() {
      this.AddProductToCartDTO.count--;
    }

    trackById(index: number, item: any): any {
      return item.id; // Use the actual unique identifier property
    }

   // Handle image loading errors and set the fallback image URL
   handleImageError(event: any): void {
    event.target.src = this.fallbackImageUrl;
   }

  OnChange($event: any): void {  
    const value = parseInt($event.target.value);
    this.SelectedStyle = this.Product.styles.find((style: StyleDTO) => style.id === value);

    this.SelectedImage = this.SelectedStyle.productImageUrls[0];
    this.Description = this.SelectedStyle.description;
    this.Price = this.SelectedStyle.currentPrice;
  }
}
