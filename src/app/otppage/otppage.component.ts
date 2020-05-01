import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerifyotpService } from '../verifyotp.service';

@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.component.html',
  styleUrls: ['./otppage.component.css']
})
export class OtppageComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private vt:VerifyotpService) { }
  userName:string;
  ngOnInit() {
    this.ar.paramMap.subscribe((urlParam)=>{
      this.userName=urlParam.get('username');
    })

  }
  verifyOtp(FormRef)
  {
    console.log(FormRef.value)
    console.log(this.userName)
  }

}
