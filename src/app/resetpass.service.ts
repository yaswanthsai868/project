import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetpassService {

  constructor(private hc:HttpClient) { }

  resetPassword(userObj):Observable<any>
  {
    return this.hc.post('/auth/resetpassword',userObj);
  }
}
