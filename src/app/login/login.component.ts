import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { resolve } from 'url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  ngOnInit()
  {
    this.ls.status=false;
    this.ls.isAdmin=false;
    this.signOut();
    
  }
  constructor(private ls:LoginService,private router:Router) { }
  login(formObject)
  {
      this.ls.doLogin(formObject).subscribe((res)=>{
        if(res['message']=='Invalid Username')
        {
          alert('please enter a valid username')
        }
        else if(res['message']=='Invalid password')
        {
          alert('please enter valid password')
        }
        else
        {
          this.ls.username=res['message']
          this.ls.status=true;
          localStorage.setItem('token',res['token'])
          if(this.ls.username=='admin')
          {
            this.ls.isAdmin=true
            this.router.navigateByUrl('/admin/dashboard')
          }
          else
          {
            this.ls.isAdmin=false
            this.router.navigateByUrl('/user/mainpage')
          }
        }
      });
  }
  signOut()
  {
    localStorage.removeItem('token');
  }


}
