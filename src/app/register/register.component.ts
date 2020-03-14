import { Component} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private ds:DataService,private router:Router) { }

  register(formObject)
  {
    this.ds.doRegister(formObject).subscribe((res)=>{
      if(res['message']=='User already exists')
      {
        alert(res['message'])
      }
      else
      {
        alert(res['message'])
        this.router.navigateByUrl('/signin')
      }
    });
  }

}
