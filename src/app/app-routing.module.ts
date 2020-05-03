import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtppageComponent } from './otppage/otppage.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { ResetpassgaurdGuard } from './resetpassgaurd.guard';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"signin",component:LoginComponent},
  {path:"user/signup",component:RegisterComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'otp/:username',component:OtppageComponent},
  {path:'reset/:username',component:ResetpassComponent,canActivate:[ResetpassgaurdGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
