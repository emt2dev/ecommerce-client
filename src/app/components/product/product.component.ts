import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { ProductWithStyleDTO } from 'src/app/models/ProductWithStyleDTO';
import { StyleDTO } from 'src/app/models/StyleDTO';
import { CompanyService } from 'src/app/services/company/company.service';

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
  constructor(private route: ActivatedRoute, private companyService: CompanyService) {}

  async ngOnInit(): Promise<void> {
    let parameters = this.route.snapshot.paramMap;
    let productId = Number(parameters.get("productId"));

    this.TestParams = productId;

    await delay(5000);
    this.companyService.GetProductDetails(productId).subscribe(async(data: any) => {
      this.Product = data;
      await this.Product;
      this.SelectedImage = this.Product.styles[0].productImageUrls[0];
      this.SelectedStyle = this.Product.styles[0];
      
    });
  }

  OnChange(value: any) {
    this.SelectedStyle = value.target.value;
    this.SelectedImage = value.target.value.productImageUrls[0];
  }
}
