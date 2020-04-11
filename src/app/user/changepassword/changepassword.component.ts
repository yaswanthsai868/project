import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangepasswordService } from 'src/app/changepassword.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent{

  constructor(private router:Router,private cps:ChangepasswordService,private ls:LoginService) { }
  changePassword(passwordObjRef)
  {
    if(passwordObjRef.value.password!=passwordObjRef.value.verify)
    {
      alert('Entered passwords do not match');
    }
    else
    {
      passwordObjRef.value.username=this.ls.username;
      this.cps.changePassword(passwordObjRef.value).subscribe((res)=>{
        alert(res['message'])
        this.router.navigateByUrl('/user/mainpage')
      })
    }
  }

}
