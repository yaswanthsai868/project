import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [MainpageComponent, AccountComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
