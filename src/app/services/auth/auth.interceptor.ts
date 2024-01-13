import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntryService } from '../entry/entry.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private entryService: EntryService) {}

  intercept(interceptedRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.entryService.returnToken();

    interceptedRequest = interceptedRequest.clone({setHeaders: {Authorization : "Bearer " + token}});

    return next.handle(interceptedRequest);
}
}
