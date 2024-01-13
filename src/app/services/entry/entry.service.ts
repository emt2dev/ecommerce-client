import { Injectable } from '@angular/core';
import { TokenInterface } from 'src/app/models/TokenInterface';



@Injectable({
  providedIn: 'root'
})
export class EntryService {
  UserInfo: TokenInterface = {
    token: '',
    user_id: '',
    refreshToken: '',
    role: '',
    decodedToken: '',
    tokenExpiration: ''
  }

  constructor() { }

  returnToken() {
    return this.UserInfo.token;
  }
}
