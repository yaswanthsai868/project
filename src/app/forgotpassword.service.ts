import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private hc:HttpClient) { }
  forgotPassword(emailObj):Observable<any>
  {
    return this.hc.post('/auth/forgotpassword',emailObj);
  }
}
