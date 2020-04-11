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
    if(EmailObjectRef.value.password!=EmailObjectRef.value.verify)
    {
      alert('Entered passwords do not match')
    }
    else
    {
      this.fp.forgotPassword(EmailObjectRef.value).subscribe((res)=>{
        if(res['message']=='Invalid username')
        {
          alert('Email is not registered');
        }
        else
        {
          alert(res['message']);
          this.router.navigateByUrl('/home');
        }
      })
      EmailObjectRef.reset();
    }
  }
}
