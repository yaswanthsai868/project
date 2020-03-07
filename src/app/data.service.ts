import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
  doRegister(formObject):Observable<any>
  {
    return this.hc.post('/user/register',formObject);
  }
  doLogin(formObject):Observable<any>
  {
    return this.hc.post('/user/login',formObject);
  }
}
