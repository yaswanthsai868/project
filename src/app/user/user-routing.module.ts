import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AccountComponent } from './account/account.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


const routes: Routes = [
  {path:'mainpage',component:MainpageComponent},
  {path:'account',component:AccountComponent},
  {path:'changepassword',component:ChangepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
