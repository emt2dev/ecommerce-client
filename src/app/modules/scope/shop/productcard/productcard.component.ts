import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-productcard',
  standalone: true,
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
  ProductList: Array<ProductDTO> = [];

  /**
   *
   */
  constructor(private CompanyService: CompanyService) {}
  
  async ngOnInit(): Promise<void> {
    await delay(5000);
    await this.CompanyService.GetAvailableCompanyProducts()
    .subscribe(async (data: any) => {
      this.ProductList = data;
      await this.ProductList;
    });
  }
}
