import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product: any | undefined;
  TestParams: Number | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let parameters = this.route.snapshot.paramMap;
    let productId = Number(parameters.get("productId"));

    this.TestParams = productId;
    // this.productService.GetProductDetails(productId).subscribe(async(data: ProductDTO) => {
    //   this.Product = data;
    //   await this.Product;
    // });
  }
}
