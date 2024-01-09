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
  readonly API_ProductCategories = "https://localhost:7210/api/Product/list/company/1/categories/all";
  readonly API_Products = "https://localhost:7210/api/Product/list/company/1/all";
  readonly API_ProductDetails = "https://localhost:7210/api/Product/details/";
  // readonly API_ProductCategories = "/api/Product/list/company/1/categories/all";

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(public http: HttpClient, public router: Router) {}

  GetProductCategories() {
    return this.http.get<Array<string>>(`${this.API_ProductCategories}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
  }

  GetProducts() {
    return this.http.get<Array<ProductDTO>>(`${this.API_Products}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
  }
  
  GetProductDetails(ProductId: number) {
    return this.http.get<ProductWithStyleDTO>(`${this.API_ProductDetails}${ProductId}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
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
