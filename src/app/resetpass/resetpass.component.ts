import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetpassService } from '../resetpass.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private rp:ResetpassService,private router:Router) { }
  username:string;
  ngOnInit() {
    this.ar.paramMap.subscribe((urlParam)=>{
      this.username=urlParam.get('username');
    })
  }
  resetPass(FormRef)
  {
    if(FormRef.password!=FormRef.rpassword)
    {
      alert('Enter passwords are not matching please re-enter passwords')
    }
    else
    {
      FormRef.value.username=this.username;
      this.rp.resetPassword(FormRef.value).subscribe((res)=>{
        if(res['message']=='Password changed successfully')
        {
          alert(res['message'])
          this.router.navigateByUrl('/home');
        }
      });
    }
  }

}
