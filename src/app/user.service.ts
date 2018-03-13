import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http, private auth: AuthService) { }
  register(user: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/accounts/signup', JSON.stringify(user), options) 
      .map(result => result.json());
  }
  login(user: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/accounts/login', JSON.stringify(user), options) 
      .map(result => {
        return result.json()
      });
  }
}
