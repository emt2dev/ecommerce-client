import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { CompanyService } from 'src/app/services/company/company.service';


@Component({
  selector: 'app-leftpanel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {
  ProductCategoriesList: Array<String> = ["TestOne","TestTwo"];

  /**
   *
   */
  constructor(private CompanyService: CompanyService) {
    
  }
  async ngOnInit(): Promise<void> {
    // await delay(5000);
    // await this.CompanyService.GetProductCategories()
    //   .subscribe(async(data: any) => {
    //     this.ProductCategoriesList = data;
    //     await this.ProductCategoriesList;
    //   });
  }
}
