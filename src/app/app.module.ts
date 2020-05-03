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
import { AutherizationService } from './autherization.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtppageComponent } from './otppage/otppage.component';
import { ResetpassComponent } from './resetpass/resetpass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    HomeComponent,
    ForgotpasswordComponent,
    OtppageComponent,
    ResetpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
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
