import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AccountComponent } from './account/account.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [MainpageComponent, AccountComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
