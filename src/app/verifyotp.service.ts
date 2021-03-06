import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyotpService {
  otpSatus:boolean;
  constructor(private hc:HttpClient) { }
  doVerifyOTP(otp):Observable<any>
  {
    return this.hc.post(`/auth/verifyotp`,otp);
  }
}
