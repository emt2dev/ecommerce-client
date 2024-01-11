// product.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private selectedProductSource = new BehaviorSubject<any>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

  setSelectedProduct(product: any): void {
    console.log(`hit the service with selected product: ${JSON.stringify(product)}`)
    this.selectedProductSource.next(product);
  }
}
