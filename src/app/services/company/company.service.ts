import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { CategoryDTO } from 'src/app/models/CategoryDTO';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { ProductWithStyleDTO } from 'src/app/models/ProductWithStyleDTO';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  readonly API_CompanyId = 1;
  readonly API_ProductCategories = "https://localhost:7210/api/Product/list/company/" + this.API_CompanyId + "/categories/all";
  readonly API_Full_Products = "https://localhost:7210/api/Product/list/company/" + this.API_CompanyId + "/all";
  readonly API_ProductDetails = "https://localhost:7210/api/Product/details/";
  readonly API_CompanyImages = "https://localhost:7210/api/Company/images/" + this.API_CompanyId + "/all";
  readonly API_Available_Products = "https://localhost:7210/api/Product/list/available/company/" + this.API_CompanyId.toString();
  readonly API_Category_Products = "https://localhost:7210/api/Product/list/company/" + this.API_CompanyId + "/keyword";

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(public http: HttpClient, public router: Router) {}

  GetProductCategories() {
    return this.http.get<Array<string>>(`${this.API_ProductCategories}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
  }

  GetAvailableCompanyProducts() {
    console.log(this.API_Available_Products);
    return this.http.get<Array<ProductWithStyleDTO>>(`${this.API_Available_Products}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
  }
  
  GetProductDetails(ProductId: number) {
    return this.http.get<ProductWithStyleDTO>(`${this.API_ProductDetails}${ProductId}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
  }
  
  GetCompanyImages() {
    return this.http.get<ProductWithStyleDTO>(`${this.API_CompanyImages}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
  }
  
  GetCompanyProductsByCategory(CatName: string) {
    return this.http.get<ProductWithStyleDTO>(`${this.API_Category_Products}/${CatName}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
  }

  ErrorHandler(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message.toString();
    } else {
      // server-side error
      msg = `Error Code: ${error.status}Message: ${error.message}`;
    }
    return msg;
  }
  
  
}
