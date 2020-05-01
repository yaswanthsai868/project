import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForgotpasswordService } from '../forgotpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent{
  constructor(private fp:ForgotpasswordService,private router:Router)
  {

  }
  forgot(EmailObjectRef):void
  {
      this.fp.forgotPassword(EmailObjectRef.value).subscribe((res)=>{
        if(res['message']=='Invalid username')
        {
          alert('Email is not registered');
        }
        else
        {
          alert(res['message']);
          this.router.navigate(['otp',res['username']]);
        }
      })
      EmailObjectRef.reset();
  }
}
