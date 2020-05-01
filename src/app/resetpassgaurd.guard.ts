import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VerifyotpService } from './verifyotp.service';

@Injectable({
  providedIn: 'root'
})
export class ResetpassgaurdGuard implements CanActivate {
  constructor(private vt:VerifyotpService) {
    
  }
  canActivate()
  {
    return this.vt.otpSatus;
  }
}
