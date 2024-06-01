import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenHttpInterceptor } from '@app/core/interceptors/token-http.interceptor';



@NgModule({
  declarations: [
    LoginComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenHttpInterceptor, multi: true  }
  ]
})
export class AuthModule { }
