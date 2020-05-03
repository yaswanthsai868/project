import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import {UserModule} from './user/user.module'
import { AutherizationService } from './autherization.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtppageComponent } from './otppage/otppage.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    HomeComponent,
    ForgotpasswordComponent,
    OtppageComponent,
    ResetpassComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    AdminModule,UserModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AutherizationService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
