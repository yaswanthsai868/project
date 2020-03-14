import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  {path:'user/mainpage',component:MainpageComponent},
  {path:'user/account',component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
