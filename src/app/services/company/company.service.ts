import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  // readonly API_ProductCategories = "https://localhost:7212/api/Product/categories";
  readonly API_ProductCategories = "/api/Product/categories";

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(public http: HttpClient, public router: Router) {}

  GetProductCategories() {
    return this.http.get<Array<String>>(`${this.API_ProductCategories}`, {headers:this.headers}).pipe(catchError(this.ErrorHandler));
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
