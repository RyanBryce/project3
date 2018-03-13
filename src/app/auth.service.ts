import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  private helper = new JwtHelperService()
  public isLoggedIn = false;
  public currentUser;

  constructor() {
    const token = localStorage.getItem("token")

    this.setUser(token)
   }

  setUser(token) {
    if(token){
      const user = this.helper.decodeToken(token)
      this.isLoggedIn = true
      this.currentUser = user
      localStorage.setItem("token", token)
    }
  }

}
