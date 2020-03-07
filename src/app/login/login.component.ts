import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private ds:DataService,private router:Router) { }
  login(formObject)
  {
    if(formObject.username=='admin' && formObject.password=='admin')
    {
      this.router.navigateByUrl('/admin');
    }
    else
    {
      this.ds.doLogin(formObject).subscribe((res)=>{console.log(res['message'])});
    }
  }


}
