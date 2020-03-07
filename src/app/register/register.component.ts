import { Component} from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private ds:DataService) { }

  register(formObject)
  {
    this.ds.doRegister(formObject).subscribe((res)=>{alert(res['message'])});
  }

}
