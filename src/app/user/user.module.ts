import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [MainpageComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
