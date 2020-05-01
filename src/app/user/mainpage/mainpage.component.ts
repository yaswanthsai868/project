import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent{

  constructor(private hc:HttpClient,private router:Router) { }
  check()
  {
    this.hc.get('/user/check').subscribe((res)=>{
      if(res['message']=='Please login')
      {
        alert(res['message'])
        this.router.navigateByUrl('/signin')
      }
      else if(res['message']=='Please relogin')
      {
        alert(res['message'])
        this.router.navigateByUrl('/signin')
      }
      else
      {
        alert(res['message'])
      }
    })
  }

}
