import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hc:HttpClient) {}
  username:string;
  status:boolean;
  isAdmin:boolean;
  doLogin(formObject):Observable<any>
  {
    return this.hc.post('/user/login',formObject);
  }
}
