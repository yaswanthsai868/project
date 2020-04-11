import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(private hc:HttpClient) { }

  changePassword(passwrodObject):Observable<any>
  {
    return this.hc.post('/auth/changepassword',passwrodObject);
  }
}
