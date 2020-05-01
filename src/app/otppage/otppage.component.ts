import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyotpService } from '../verifyotp.service';
import { ForgotpasswordService } from '../forgotpassword.service';

@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.component.html',
  styleUrls: ['./otppage.component.css']
})
export class OtppageComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private vt:VerifyotpService,private fp:ForgotpasswordService,private router:Router) { }
  userName:string;
  ngOnInit() {
    this.ar.paramMap.subscribe((urlParam)=>{
      this.userName=urlParam.get('username');
    })

  }
  verifyOtp(FormRef)
  {
    FormRef.value.username=this.userName;
    this.vt.doVerifyOTP(FormRef.value).subscribe((res)=>{
      if(res['message']=='Otp has expired new otp has been sent to your mail')
      {
        alert('Otp has expired');
        this.resendotp()
        this.vt.otpSatus=false;
      }
      else if(res['message']=='You have entered incorrect OTP please try again')
      {
        alert('You have entered incorrect OTP please try again');
        this.vt.otpSatus=false;
      }
      else
      {
        this.vt.otpSatus=true;
        this.router.navigate(['/reset',this.userName])
      }
    });
  }
  resendotp()
  {
    let usrobj={username:this.userName}
    this.fp.forgotPassword(usrobj).subscribe((res)=>{
      if(res['message']=='Invalid username')
      {
        alert('Email is not registered');
      }
      else
      {
        alert(res['message']);
      }
    })

  }

}
