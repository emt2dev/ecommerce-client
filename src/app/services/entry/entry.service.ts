import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenInterface } from 'src/app/models/TokenInterface';
import jwt_decode, { JwtPayload } from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private user: BehaviorSubject<TokenInterface | null | undefined> = new BehaviorSubject<TokenInterface | null | undefined>(undefined);


  UserInfo: TokenInterface = {
    token: '',
    user_id: '',
    refreshToken: '',
    role: '',
    decodedToken: '',
    tokenExpiration: ''
  }

  constructor(private http: HttpClient, public router: Router) { this.loadUserDetails(); }

  returnToken() {
    return this.UserInfo.token;
  }

  loadUserDetails() {
    const token = this.UserInfo.token;
    const refreshToken = this.UserInfo.refreshToken;

    if(token && refreshToken) {

      const decoded: any = jwt_decode<JwtPayload>(token);
      console.log(decoded);
      const decodedUser: TokenInterface = {
        token: token,
        user_id: decoded.sub,
        role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        refreshToken: refreshToken,
        decodedToken: decoded,
        tokenExpiration: decoded.exp,
      };

      this.user.next(decodedUser);
    } else {
      this.user.next(null);
    }
  }
}
